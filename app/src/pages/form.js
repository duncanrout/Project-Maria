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
            <input type="text" className="form-control" placeholder="ex: A Business Name" />
        </div>

        <div className="form-group">
            <label>When was the business founded?</label>
            <input type="text" className="form-control" placeholder="ex: 2000" />
        </div>

        <div className="form-group">
            <label>Tell us about your business.</label>
            <input type="text" className="form-control" placeholder="ex: We are a business that does certain things." />
        </div>

        <div className="form-group">
            <label>What is your businesses' address?</label>
            <input type="text" className="form-control" placeholder="ex: Av. abcdefg 1234" />
        </div>

        <div className="form-group">
            <label>Does your business have a second address? (OPTIONAL)</label>
            <input type="text" className="form-control" placeholder="ex: Av. abcdefg 5678" />
        </div>

        <div className="form-group">
            <label>What is your business's City and Province?</label>
            <input type="text" className="form-control" placeholder="ex: Sao Paulo, Sao Paulo" />
        </div>

        <div className="form-group">
            <label>What is your business's Post Code?</label>
            <input type="text" className="form-control" placeholder="ex: 12345-678" />
        </div>

        <div className="form-group">
            <label>What is a good phone number to contact you at?</label>
            <input type="text" className="form-control" placeholder="ex: 12 3456-7891" />
        </div>

        <div className="form-group">
            <label>Does your business have a second phone number? (OPTIONAL) </label>
            <input type="text" className="form-control" placeholder="ex: 12 3456-7891" />
        </div>

        <div className="form-group">
            <label>Does your business have an email?</label>
            <input type="email" className="form-control" placeholder="ex: johnDoe@1234.com" />
        </div>

        <div className="form-group">
            <label>What is your business's website? (OPTIONAL)</label>
            <input type="text" className="form-control" placeholder="ex: http://www.mywebsite.com.br" />
        </div>

        <div className="form-group">
            <label>How many employees does your bussiness have? (OPTIONAL)</label>
            <input type="text" className="form-control" placeholder="ex: 12345" />
        </div>

        <button type="submit" className="btn btn-dark btn-lg btn-block">Submit</button>
        <p className="forgot-password text-right">
            Need <a href="#">help?</a>
        </p>
    </div>
);