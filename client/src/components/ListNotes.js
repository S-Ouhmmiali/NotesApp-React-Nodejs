import React, { Fragment, useEffect, useState } from 'react';


import EditNote from './EditNote';



const ListNotes = ()=>{

    // delete function 

    const deleteNote = async (id) => {
        try {
            const deleterequest = await fetch(`http://localhost:3001/notes/${id}`, {
                method : "DELETE",
            });
            setNotes(notes.filter(note => note.note_id !== id));
            
        } catch (error) {
            
        }

    }
    
    const [notes,setNotes] = useState([]);
   

    const getNotes = async () => {
        try {
            const response = await fetch("http://localhost:3001/notes");
            const jsonData = await response.json()

            setNotes(jsonData);
            
        } catch (error) {
            console.error(error.message)
            
        }
    }

    useEffect(() => {
        getNotes();
    },[]);
    

    return(
        <Fragment>
            {" "}
            <div class="container"> 
                <table class="table mt-5 text-center " >
                    <thead>
                    <tr>
                        <th>Note</th>
                        <th>Edit</th>
                        <th>Delete</th>
                        <th>Date</th>
                    </tr>
                    </thead>
                    <tbody>
                     {notes.map(note => (
                        <tr key = {note.note_id}>
                            <td> {note.note_title}
                           

                            </td>
                            <td> <EditNote note= {note} /> </td>
                            <td> <button className='btn btn-danger' onClick={() => deleteNote(note.note_id)}> Delete </button> </td>
                            <td>{note.note_date.substring(0, 10)} {note.note_date.substring(11, 16)} </td>

                            
                        </tr>
                     ))

                     }
                    </tbody>
                </table>
                </div>
        </Fragment>
    )
    
}

export default ListNotes;