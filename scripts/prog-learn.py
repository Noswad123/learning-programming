import argparse
import os
import subprocess
import tempfile
from sqlite3 import connect

DB_PATH = "db/programming_languages.db"
KATAS_DIR = "katas"

def run_python_tests(kata_name: str, user_code: str) -> bool:
    test_file = os.path.join(KATAS_DIR, kata_name, "test_" + kata_name + ".py")
    if not os.path.exists(test_file):
        print(f"❌ No test file found at: {test_file}")
        return False

    with tempfile.NamedTemporaryFile(suffix=".py", mode='w+', delete=False) as tmp:
        tmp.write(user_code)
        tmp.flush()
        try:
            subprocess.check_call(["pytest", test_file, "--tb=short"])
            return True
        except subprocess.CalledProcessError:
            return False

def open_editor(initial_code: str = "") -> str:
    with tempfile.NamedTemporaryFile(suffix=".py", mode='w+', delete=False) as tmp:
        tmp.write(initial_code)
        tmp.flush()
        subprocess.call([os.environ.get("EDITOR", "vim"), tmp.name])
        tmp.seek(0)
        result = tmp.read()
    os.unlink(tmp.name)
    return result

TEST_RUNNERS = {
    "python": run_python_tests,
}
def run_tests(kata_name: str, language: str, user_code: str) -> bool:
    runner = TEST_RUNNERS.get(language)
    if runner:
        return runner(kata_name, user_code)
    print(f"❌ Test runner not implemented for {language}")
    return False


def fetch_previous_solution(db, kata_name, language):
    cursor = db.execute("""
        SELECT code_snippet FROM examples
        JOIN trackables AS k ON k.id = examples.concept_trackable_id
        JOIN trackables AS l ON l.id = examples.language_trackable_id
        WHERE k.name = ? AND l.name = ? AND examples.explanation = 'success'
        """, (kata_name, language))
    row = cursor.fetchone()
    return row[0] if row else None

def store_successful_solution(db, kata_name, language, code):
    k_id = db.execute("SELECT id FROM trackables WHERE name = ? AND type = 'kata'", (kata_name,)).fetchone()[0]
    l_id = db.execute("SELECT id FROM trackables WHERE name = ? AND type = 'language'", (language,)).fetchone()[0]

    exists = db.execute("""
        SELECT 1 FROM examples
        WHERE language_trackable_id = ? AND concept_trackable_id = ? AND explanation = 'success'
        """, (l_id, k_id)).fetchone()

    if not exists:
        db.execute("""
            INSERT INTO examples (language_trackable_id, concept_trackable_id, code_snippet, explanation)
            VALUES (?, ?, ?, 'success')
        """, (l_id, k_id, code))
        db.commit()
    else:
        print("ℹ️ Already marked as successfully solved. No update stored.")

def get_kata_code(kata_name: str, language: str):
    extension_map = {"python": "py", "javascript": "js", "java": "java"}
    file_path = os.path.join(KATAS_DIR, kata_name, f"{kata_name}.{extension_map[language]}")
    if not os.path.exists(file_path):
        print(f"❌ No solution file found at: {file_path}")
        return ""
    with open(file_path, 'r') as file:
        return file.read()

def get_kata_instructions(kata_name: str):
    path = os.path.join(KATAS_DIR, kata_name, "instructions.md")
    if os.path.exists(path):
        with open(path, "r") as f:
            return f.read()
    return ""

def handle_kata(kata_name: str, language: str, file: bool= False, answer: bool=False, edit: bool=False):
    db = connect(DB_PATH)

    if answer:
        prev = fetch_previous_solution(db, kata_name, language)
        if prev:
            print("\nPrevious solution:\n" + "-" * 40)
            print(prev)
            print("-" * 40)
            db.close()
            return

    print(f"Opening buffer for {kata_name} in {language}...\n")
    # Todo fetch instructions from the database
    user_code = ""
    if file:
        user_code=get_kata_code(kata_name, language)
        if edit:
            user_code = open_editor(user_code)
    else:
        kata_instructions = get_kata_instructions(kata_name)
        user_code = open_editor(kata_instructions)

    print("\nRunning tests...")
    # TODO test/code may not always be in python
    success = run_tests(kata_name, language,  user_code)
    if success:
        print("✅ Success! Storing your solution.")
        store_successful_solution(db, kata_name, language, user_code)
    else:
        print("❌ Tests failed. Try again.")

    db.close()

def list_items(db, item_type):
    cursor = db.execute("SELECT id, name FROM trackables WHERE type = ?", (item_type,))
    for row in cursor.fetchall():
        print(f"{row[0]}: {row[1]}")

def main():
    valid_choices =["list", "show", "run", "status", "progress", "kata"]
    parser = argparse.ArgumentParser()
    parser.add_argument("command", choices=valid_choices, help="Command to execute")
    parser.add_argument("--type")
    parser.add_argument("--name")
    parser.add_argument("--language")
    parser.add_argument("--update")
    parser.add_argument("--status")
    parser.add_argument("--file", action="store_true")
    parser.add_argument("--answer", action="store_true")
    parser.add_argument("--edit", action="store_true")
    args = parser.parse_args()

    db = connect(DB_PATH)

    match args.command:
        case "list":
            list_items(db, args.type)
        case "show":
            print("not implemented")
        case "run":
            print("not implemented")
        case "status":
            print("not implemented")
        case "progress":
            print("not implemented")
        case "kata":
            handle_kata(args.name, args.language, args.file, args.answer)

    db.close()

if __name__ == "__main__":
    main()

# list --type concept
# show --name <name>
# kata --name <name> --language <language> -answer (optional flag)
# status --type project
# progress --update <name> <status>
