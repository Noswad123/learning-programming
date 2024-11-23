-- Bash = 4
-- Lua = 2
-- Python = 1
-- Typescript = 3
-- GO = 5

-- INSERT INTO concepts (name, description) VALUES
-- ('Read file', 'A function that reads the contents of a file');

-- INSERT INTO examples (language_id, concept_id, code_snippet, explanation) VALUES
-- ();

update examples  set code_snippet='student = {"name": "Jamal", "age": 37}
student.get("name")'
where language_id=1 and concept_id=5;

SELECT
    l.name AS Language,
    c.name AS Concept,
    e.code_snippet AS Example
FROM
    examples e
    INNER JOIN languages l ON e.language_id = l.id
    INNER JOIN concepts c ON e.concept_id = c.id;


-- -- For Lua
-- (2, 2, 'local number = 42', 'Declares a number primitive in Lua'),
-- -- For Bash
-- (4, 2, 'declare -i number=42', 'Declares an integer in Bash'),
-- -- For Python
-- -- For TypeScript
-- (3, 2, 'let number: number = 42;', 'Declares a number in TypeScript'),
-- -- For Go
-- (5, 2, 'var number int = 42', 'Declares an integer in Go');

