CREATE TABLE note(
    note_id        SERIAL PRIMARY KEY,
    note_title     VARCHAR(30),
    description    VARCHAR(255),
    note_date     TIMESTAMP NOT NULL
);