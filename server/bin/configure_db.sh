#!/bin/bash


export PGPASSWORD='node_password'

echo "Configuring notesdb"

dropdb -U node_user notesdb
createdb -U node_user notesdb


psql -U node_user notesdb < ./bin/sql/note.sql 





echo "notesdb configured"