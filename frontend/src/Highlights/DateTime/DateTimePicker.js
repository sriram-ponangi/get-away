/*
* Authors: 
    - Mandava, Abhinav
*/

import React, { Component, useState } from 'react';
import DatePicker from "react-datepicker";
import { Redirect } from 'react-router-dom';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

const DateTimePicker = (props) => {
    const groupName = props.category + " " + props.title;
    const loc_id = props.loc_id;
    console.log("Loc ID: " + loc_id);

    const [startDate, setStartDate] = useState(new Date());
    let handleChange = (date) => {
        setStartDate(date)
        if (new Date() > date) {
            window.alert('Date cannot be before today\'s date!');
            setStartDate(new Date())
        }
    }
    let joinGroup = (date) => {
        if (new Date() > date - 1) {
            window.alert('Date cannot be before today\'s date!');
            setStartDate(new Date())
        }
        else {
            axios.post('group/member', {name: groupName, highlightId: loc_id}).then(res=>{
                console.log(res);
                window.alert('Thank you! You will be notified with the information of other users going on the same date');
            }).catch(error=>{
                console.log(error);
            })
        }
    }
    return (
        <div className="w-100 text-center">
            <div className="d-block mb-3">
                <h6>Select a date to join others!</h6>
                <DatePicker selected={startDate} onChange={date => handleChange(date)} />
            </div>
            <button type="button join-grp" className="btn btn-primary" onClick={() => { joinGroup(startDate) }}>Join a Group</button>
        </div>
    );
};

export default DateTimePicker;
