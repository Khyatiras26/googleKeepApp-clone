import React, { useState } from "react";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';


const CreateNote = (props) => {

    const [note , setNote] = useState({
        title : '',
        content : '',
    });

    const [expand, setExpand] = useState(false);

    const InputEvent = (event) => {
        const {name,value} = event.target;

        setNote((prevElem) => {
            return {
                ...prevElem,
                [name] : value,
            };
            
        })
    }
    console.log(note);

    const addNote = () => {
        props.passNote(note);
        setNote({
            title : '',
            content : '',
        });

        
    }

    const expandIt = () => {
        setExpand(true);
    }

    const shrinkIt = () =>{
        setExpand(false);
    }

    return(
        <>
            <div className="main_note" onDoubleClick={shrinkIt}>
                <form>
                    {expand ?
                    <input type= "text" 
                    placeholder="Title"
                    name = "title"
                    value= {note.title}
                    onChange= {InputEvent} 
                    autoComplete="off"/>
                    : null}
                    <textarea 
                    rows="" 
                    column=""
                    name="content"
                    value={note.content}
                    onChange= {InputEvent}
                    placeholder="Write a note..."
                    onClick={expandIt}
                    />
                    {expand ?
                    <Button onClick={addNote}>
                        <AddIcon className="plus-sign"/>
                    </Button>
                    :null}
                </form>
            </div>
        </>
    );

}

export default CreateNote;