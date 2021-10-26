import React from 'react';
import TextArea from '../utils/textarea';


const AboutMe = ({ id, about, onChange }) => {
    return(
        <div className='about-div'>
            <div className="about-form">
                <h2 className='personal-title'>About Me</h2>
                <TextArea
                    onChange={(e) => onChange(e, id)}
                    name="textValue"
                    placeholder="Description"
                    value={about.textValue}
                    className="about-textarea"
                />
                {/* <Button text="Delete this entry" onClick={() => onDelete(id)} className="personal-button delete-button"></Button> */}
            </div>
        </div>    

    )
}

export default AboutMe;