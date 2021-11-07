import React from 'react';
import TextArea from '../utils/textarea';


const AboutMe = ({ id, about, onChange }) => {
    const getToken = localStorage.getItem("id_token")
    if(getToken){
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
            </div>
        </div>    

    )} else {
        return(
            <div>
                <h5>
                   
                </h5>
            </div>
        )
    }

}

export default AboutMe;