import sqlite3
from sqlite3 import Error

def create_connection(db_file):
    """ create a database connection to a SQLite database """
    conn = None
    try:
        conn = sqlite3.connect(db_file)
        print(f"Successfully connected to SQLite version: {sqlite3.version}")
        return conn
    except Error as e:
        print(e)
    return conn

def exec_query(conn, sql):
    try:
        c = conn.cursor()
        return c.execute(sql)
    except Error as e:
        print(e)

def main():
    database = "./db/programming_languages.db"

    sql = """
    SELECT
        l.name AS Language,
        c.name AS Concept,
        e.code_snippet AS Example
    FROM
        examples e
        INNER JOIN languages l ON e.language_id = l.id
        INNER JOIN concepts c ON e.concept_id = c.id;
    """

    # create a database connection
    conn = create_connection(database)

    # create tables
    if conn:
        results = exec_query(conn, sql)
        if results:
            for row in results:
                print(row)
        conn.close()
    else:
        print("Error! cannot create the database connection.")

if __name__ == '__main__':
    main()
