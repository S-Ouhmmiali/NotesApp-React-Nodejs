import React, { Fragment, useState } from 'react';

const InputNote = ()=>{
    const onSubmitForm = async(e) => {
        e.preventDefault()
        try{
            const body = {note_title, description};
            const response = await fetch("http://localhost:3001/notes", {
                method : "POST",
                headers : {"content-type" : "application/json"},
                body : JSON.stringify(body)
            });

        window.location = "/";
        } catch(err){
            console.error(err.message)
        }
    }
    const [description, setDescription] = useState("");
    const [note_title, setTitle] = useState("");


    return(
        <Fragment >       
            <form onSubmit={onSubmitForm} id='input' >
            <div class="content"> 
            <span>
                <div class="nameField">
                Title: 
                </div>
                <div class="inputField">
                    <input type="text" className="form-control" style = {{width : '470',  height: '50px'}} value={note_title} onChange={e=>{
                        setTitle(e.target.value)
                    }} /> 
                </div>
            </span>
            <span>
                <div class="nameField">
                Description: 
                </div>
                <div class="inputField">

                <textarea className="form-control" style = {{width : '600px',  height: '150px'}} value={description} onChange={e=>{
                        setDescription(e.target.value)
                    }} ></textarea>
                </div>

            </span>
            <button className="btn btn-success"> Add</button>
            </div>
            </form>
        </Fragment>
    )
    
}

export default InputNote;



