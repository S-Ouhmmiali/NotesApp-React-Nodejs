const express = require('express');
const port = 3001;
const app = express();
const cors = require('cors');
const pool = require('./db');

// middleware
app.use(cors());

app.use(express.json());

//Routes

// Create a note
app.post("/notes", async(req,res) => {
    try{
        const {note_title , description} = req.body;
        const d = new Date();
        d.setHours(d.getHours() + 2);
        const newNote = await pool.query(
            "INSERT INTO note (note_title, description,  note_date) VALUES($1,$2,$3) RETURNING *",
            [note_title, description, d]
        );

        res.json(newNote.rows);
    } catch (error){
        console.error('error',error.message);
    }
})


// Get all notes
app.get("/notes", async(req,res) => {
    try{
        const allNotes = await pool.query(
            "SELECT * FROM note"
        );

        res.json(allNotes.rows);
    } catch (error){
        console.error('error',error.message);
    }
})
// Get a note
app.get("/notes/:id", async(req,res) => {
    try{
        const {id} = req.params;
        const myNote = await pool.query(
            `SELECT * FROM note
            WHERE note_id=$1`,[id]
        );
        res.json(myNote.rows[0]);
    } catch (error){
        console.error('error',error.message);
    }
})


//update a note
app.put("/notes/:id", async(req,res) => {
    try{
        const {id} = req.params;
        const {note_title ,description} = req.body;
        const d = new Date();
        d.setHours(d.getHours() + 2);
        const updateNote = await pool.query(
            `UPDATE note SET description=$1,note_title=$2,note_date=$3
            WHERE note_id=$4`,[description, note_title, d, id]
        );
        res.json(updateNote.rows[0]);
    } catch (error){
        console.error('error',error.message);
    }
})

// delete a note
app.delete("/notes/:id", async(req,res) => {
    try{
        const {id} = req.params;
        const deleteNote = await pool.query(
            `DELETE FROM note
            WHERE note_id=$1`,[id]
        );
        res.json("note was deleted");
    } catch (error){
        console.error('error',error.message);
    }
})


 
app.listen(port, () => {
    console.log(`server started listening on port ${port}`);
})

