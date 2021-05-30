import React from "react";
import './form.css';


export const Form = (props) => (

    <div id="Box">
        <div id="Title">
            <h1>Create Business</h1>
        </div>

        <div className="form-group">
            <label>What is the name of your business?</label>
            <input type="email" className="form-control" placeholder="ex: comp363" />
        </div>

        <div className="form-group">
            <label>When was the business founded?</label>
            <input type="email" className="form-control" placeholder="ex: Nick Hayward" />
        </div>

        <div className="form-group">
            <label>Temp?</label>
            <input type="email" className="form-control" placeholder="ex: 5:30pm" />
        </div>

        <button type="submit" className="btn btn-dark btn-lg btn-block">Create!</button>
        <p className="forgot-password text-right">
            Need <a href="#">help?</a>
        </p>
    </div>
)