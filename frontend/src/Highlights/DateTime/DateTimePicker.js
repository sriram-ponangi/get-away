/*
* Authors: 
    - Mandava, Abhinav
*/

import React, { Component, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateTimePicker = () => {
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
            window.alert('Thank you! You will be notified with the information of other users going on the same date');
        }
    }
    return (
        <div>
            <DatePicker selected={startDate} onChange={date => handleChange(date)} />
            <button type="button join-grp" className="btn btn-primary" onClick={() => { joinGroup(startDate) }}>Join a Group</button>
        </div>
    );
};

export default DateTimePicker;
