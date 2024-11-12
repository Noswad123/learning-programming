CREATE TABLE IF NOT EXISTS languages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    version TEXT,
    documentation_url TEXT
);

CREATE TABLE IF NOT EXISTS concepts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT
);

CREATE TABLE IF NOT EXISTS examples (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    language_id INTEGER NOT NULL,
    concept_id INTEGER NOT NULL,
    code_snippet TEXT NOT NULL,
    explanation TEXT,
    FOREIGN KEY (language_id) REFERENCES languages (id),
    FOREIGN KEY (concept_id) REFERENCES concepts (id)
);