import React, { Fragment, useEffect, useState } from 'react';

const EditNote = ({note })=>{
    const [description, setDescription] = useState(note.description);
    const [note_title, setTitle] = useState(note.note_title);


    const editNote = async(e) => {
        e.preventDefault();
        try {
            const body = {note_title, description}
            const editNote= await fetch(`http://localhost:3001/notes/${note.note_id}`, {
                method : "PUT",
                headers : {"content-type" : "application/json"},
                body : JSON.stringify(body)
            });
            window.location = "/";
        } catch (error) {
            console.error(error.message);
            
        }
    }

    

    return(
        <Fragment>
            <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target={`#id${note.note_id}`}>
            Edit 
            </button>

            <div class="modal" id={`id${note.note_id}`} onClick = {() => {setDescription(note.description);
                            setTitle(note.note_title)}} >
                <div class="modal-dialog">
                    <div class="modal-content">

                        <div class="modal-header">
                            <h4 class="modal-title">Edit note</h4>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" onClick = {() => {setDescription(note.description);
                            setTitle(note.note_title)}} ></button>
                        </div>

                        <div class="modal-body">
                        <input type="text" className='form-control' value={note_title} onChange={e=>{
                        setTitle(e.target.value)}} />
                        <textarea className="form-control" style = {{width : '470px',  height: '200px'}} value={description} onChange={e=>{
                        setDescription(e.target.value)
                        }} ></textarea>
                        </div>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-warning" onClick={e => editNote(e)} data-bs-dismiss="modal" >Edit</button>
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal" onClick = {() => {setDescription(note.description);
                            setTitle(note.note_title)}}>Close</button>
                        </div>

                    </div>
                </div>
            </div>
            
        </Fragment>
    )
    
}

export default EditNote;