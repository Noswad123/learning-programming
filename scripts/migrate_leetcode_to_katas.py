import os
import re
import shutil
import sqlite3

LEETCODE_DIR = "leetcode"
KATAS_DIR = "katas"
DB_PATH = "db/programming_languages.db"

def to_camel_case(name: str) -> str:
    words = re.split(r'[-_]', name)
    return words[0].lower() + ''.join(w.capitalize() for w in words[1:])

def ensure_tag(conn, tag_name):
    cursor = conn.execute("SELECT id FROM tags WHERE name = ?", (tag_name,))
    row = cursor.fetchone()
    if row:
        return row[0]
    conn.execute("INSERT INTO tags (name) VALUES (?)", (tag_name,))
    conn.commit()
    return conn.execute("SELECT id FROM tags WHERE name = ?", (tag_name,)).fetchone()[0]

def insert_kata(conn, name, description=""):
    cursor = conn.execute("SELECT id FROM trackables WHERE name = ? AND type = 'kata'", (name,))
    row = cursor.fetchone()
    if row:
        return row[0]
    conn.execute("INSERT INTO trackables (name, type, description) VALUES (?, 'kata', ?)", (name, description))
    conn.commit()
    return conn.execute("SELECT id FROM trackables WHERE name = ? AND type = 'kata'", (name,)).fetchone()[0]

def tag_trackable(conn, trackable_id, tag_id):
    exists = conn.execute(
        "SELECT 1 FROM trackable_tags WHERE trackable_id = ? AND tag_id = ?", (trackable_id, tag_id)
    ).fetchone()
    if not exists:
        conn.execute(
            "INSERT INTO trackable_tags (trackable_id, tag_id) VALUES (?, ?)", (trackable_id, tag_id)
        )
        conn.commit()

def migrate_leetcode_problems():
    conn = sqlite3.connect(DB_PATH)
    leetcode_tag_id = ensure_tag(conn, "leetcode")

    for item in os.listdir(LEETCODE_DIR):
        src_path = os.path.join(LEETCODE_DIR, item)
        if not os.path.isdir(src_path):
            continue

        camel_case_name = to_camel_case(item)
        dst_path = os.path.join(KATAS_DIR, camel_case_name)

        if os.path.exists(dst_path):
            print(f"⚠️ Skipping {item}: {dst_path} already exists")
            continue

        print(f"🚚 Moving {item} → {camel_case_name}")
        shutil.move(src_path, dst_path)

        # Rename all files inside to camelCase
        for filename in os.listdir(dst_path):
            old_file_path = os.path.join(dst_path, filename)
            base, ext = os.path.splitext(filename)
            camel_file_name = to_camel_case(base) + ext
            new_file_path = os.path.join(dst_path, camel_file_name)
            os.rename(old_file_path, new_file_path)

        # Insert into DB
        trackable_id = insert_kata(conn, camel_case_name)
        tag_trackable(conn, trackable_id, leetcode_tag_id)

    conn.close()
    print("✅ Migration complete.")

if __name__ == "__main__":
    migrate_leetcode_problems()
