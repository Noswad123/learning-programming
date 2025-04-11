-- Trackables master table
CREATE TABLE trackables (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    type TEXT NOT NULL CHECK (type IN ('language', 'concept', 'kata', 'project')),
    description TEXT
);

-- Relationships between trackables
CREATE TABLE trackable_relationships (
    source_id INTEGER NOT NULL,
    target_id INTEGER NOT NULL,
    relation TEXT NOT NULL CHECK (relation IN ('uses', 'includes', 'depends_on', 'implements')),
    PRIMARY KEY (source_id, target_id, relation),
    FOREIGN KEY (source_id) REFERENCES trackables(id),
    FOREIGN KEY (target_id) REFERENCES trackables(id)
);

-- Optional extra fields for languages
CREATE TABLE language_info (
    trackable_id INTEGER PRIMARY KEY,
    version TEXT,
    documentation_url TEXT,
    FOREIGN KEY (trackable_id) REFERENCES trackables(id)
);

-- Tags and tagging
CREATE TABLE tags (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL UNIQUE
);

CREATE TABLE trackable_tags (
    trackable_id INTEGER NOT NULL,
    tag_id INTEGER NOT NULL,
    PRIMARY KEY (trackable_id, tag_id),
    FOREIGN KEY (trackable_id) REFERENCES trackables(id),
    FOREIGN KEY (tag_id) REFERENCES tags(id)
);

-- Progress
CREATE TABLE trackable_progress (
    trackable_id INTEGER PRIMARY KEY,
    status TEXT CHECK (status IN ('not started', 'in progress', 'mastered', 'abandoned')) DEFAULT 'not started',
    notes TEXT,
    FOREIGN KEY (trackable_id) REFERENCES trackables(id)
);

INSERT INTO trackables (name, type, description)
SELECT name, 'language', NULL FROM languages;

INSERT INTO language_info (trackable_id, version, documentation_url)
SELECT t.id, l.version, l.documentation_url
FROM languages l
JOIN trackables t ON t.name = l.name AND t.type = 'language';

INSERT INTO trackables (name, type, description)
SELECT name, 'concept', description FROM concepts;

ALTER TABLE examples
ADD COLUMN language_trackable_id INTEGER;

ALTER TABLE examples
ADD COLUMN concept_trackable_id INTEGER;

UPDATE examples
SET language_trackable_id = (
    SELECT t.id FROM trackables t
    JOIN languages l ON l.name = t.name
    WHERE t.type = 'language' AND l.id = examples.language_id
),
concept_trackable_id = (
    SELECT t.id FROM trackables t
    JOIN concepts c ON c.name = t.name
    WHERE t.type = 'concept' AND c.id = examples.concept_id
);
