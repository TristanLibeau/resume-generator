import React from 'react';
import Input from '../utils/input';
import Button from "../utils/Button";

const Education = ({ id, education, onChange, onDelete }) => {
    const getToken = localStorage.getItem("id_token")
    if(getToken){
    return(
            <div className="personal-form">
                <Input
                    onChange={(e) => onChange(e, id)}
                    type="text"
                    name="school"
                    placeholder="School/University"
                    value={education.school}
                    className="personal-input"
                />
                <Input
                    onChange={(e) => onChange(e, id)}
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={education.address}
                    className="personal-input"
                />
                <Input
                    onChange={(e) => onChange(e, id)}
                    type="text"
                    name="degree"
                    placeholder="Degree"
                    value={education.degree}
                    className="personal-input"
                />
                <Input
                    onChange={(e) => onChange(e, id)}
                    type="text"
                    name="focus"
                    placeholder="Focus"
                    value={education.focus}
                    className="personal-input"
                />
                <div className='input-row-div'>
                    <Input
                        onChange={(e) => onChange(e, id)}
                        type="text"
                        name="from"
                        placeholder="From"
                        value={education.from}
                        className="personal-input"
                    />
                    <Input
                        onChange={(e) => onChange(e, id)}
                        type="text"
                        name="to"
                        placeholder="To"
                        value={education.to}
                        className="personal-input"
                    />
                </div>
                <Button text="Delete this entry" onClick={() => onDelete(id)} className="personal-button delete-button"></Button>
        </div>
    )} else {
        return(
            <div>
                <h5>
                    You need to login or sign Up to be able to use the app.
                </h5>
            </div>
        )
    }
}

export default Education;