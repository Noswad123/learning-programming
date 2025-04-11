-- Languages table
CREATE TABLE IF NOT EXISTS languages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    version TEXT,
    documentation_url TEXT
);

-- Concepts table
CREATE TABLE IF NOT EXISTS concepts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT
);

-- Tag system
CREATE TABLE IF NOT EXISTS concept_tags (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS concept_tag_map (
    concept_id INTEGER NOT NULL,
    tag_id INTEGER NOT NULL,
    PRIMARY KEY (concept_id, tag_id),
    FOREIGN KEY (concept_id) REFERENCES concepts(id),
    FOREIGN KEY (tag_id) REFERENCES concept_tags(id)
);

-- Concept hierarchy (optional, allows parent-child relationships)
CREATE TABLE IF NOT EXISTS concept_relationships (
    parent_id INTEGER NOT NULL,
    child_id INTEGER NOT NULL,
    PRIMARY KEY (parent_id, child_id),
    FOREIGN KEY (parent_id) REFERENCES concepts(id),
    FOREIGN KEY (child_id) REFERENCES concepts(id)
);

-- Examples with metadata
CREATE TABLE IF NOT EXISTS examples (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    language_id INTEGER NOT NULL,
    concept_id INTEGER NOT NULL,
    title TEXT,
    code_snippet TEXT NOT NULL,
    explanation TEXT,
    difficulty TEXT CHECK (difficulty IN ('basic', 'intermediate', 'advanced')) DEFAULT 'basic',
    show_side_by_side BOOLEAN DEFAULT 1,
    test_input TEXT,
    expected_output TEXT,
    FOREIGN KEY (language_id) REFERENCES languages(id),
    FOREIGN KEY (concept_id) REFERENCES concepts(id)
);

-- User progress tracking
CREATE TABLE IF NOT EXISTS user_progress (
    language_id INTEGER NOT NULL,
    concept_id INTEGER NOT NULL,
    status TEXT CHECK (status IN ('not started', 'in progress', 'mastered')) DEFAULT 'not started',
    notes TEXT,
    PRIMARY KEY (language_id, concept_id),
    FOREIGN KEY (language_id) REFERENCES languages(id),
    FOREIGN KEY (concept_id) REFERENCES concepts(id)
);

CREATE TABLE IF NOT EXISTS trackables (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    type TEXT NOT NULL CHECK (type IN ('language', 'concept', 'kata', 'project')),
    description TEXT
);

CREATE TABLE IF NOT EXISTS trackable_relationships (
    source_id INTEGER NOT NULL,
    target_id INTEGER NOT NULL,
    relation TEXT NOT NULL CHECK (relation IN (
        'uses',          -- e.g., kata uses concept
        'includes',      -- e.g., project includes kata
        'depends_on',    -- e.g., concept depends on concept
        'implements'     -- e.g., project implements concept
    )),
    FOREIGN KEY (source_id) REFERENCES trackables(id),
    FOREIGN KEY (target_id) REFERENCES trackables(id),
    PRIMARY KEY (source_id, target_id, relation)
);

CREATE TABLE IF NOT EXISTS trackable_progress (
    trackable_id INTEGER PRIMARY KEY,
    status TEXT CHECK (status IN ('not started', 'in progress', 'mastered', 'abandoned')) DEFAULT 'not started',
    notes TEXT,
    FOREIGN KEY (trackable_id) REFERENCES trackables(id)
);

CREATE TABLE IF NOT EXISTS tags (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS trackable_tags (
    trackable_id INTEGER NOT NULL,
    tag_id INTEGER NOT NULL,
    PRIMARY KEY (trackable_id, tag_id),
    FOREIGN KEY (trackable_id) REFERENCES trackables(id),
    FOREIGN KEY (tag_id) REFERENCES tags(id)
);

CREATE TABLE IF NOT EXISTS language_info (
    trackable_id INTEGER PRIMARY KEY,
    version TEXT,
    documentation_url TEXT,
    FOREIGN KEY (trackable_id) REFERENCES trackables(id)
);
