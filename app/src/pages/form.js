import React from "react";
import './form.css';

//TODO (Interact form with Firebase, if(register company) => auth => show Form page)
export const Form = (props) => (

    <div id="Box">
        <div id="Title">
            <h1>Business Application Form</h1>
        </div>

        <div className="form-group">
            <label>What is the name of your business?</label>
            <input type="email" className="form-control" placeholder="ex: A Business Name" />
        </div>

        <div className="form-group">
            <label>When was the business founded?</label>
            <input type="email" className="form-control" placeholder="ex: 2000" />
        </div>

        <div className="form-group">
            <label>Tell us about your business.</label>
            <input type="email" className="form-control" placeholder="ex: We are a business that does certain things." />
        </div>

        <button type="submit" className="btn btn-dark btn-lg btn-block">Submit</button>
        <p className="forgot-password text-right">
            Need <a href="#">help?</a>
        </p>
    </div>
);