import React from "react";
import { useState } from "react";
import "../styles/contactForm.css";

function SingleSelection({value, onChange}) {

  return (
    <>
        <div className="col-75">
          <div className="checkboxContainer">
            <input 
              className="checkbox"
              type="radio"
              id="morning"
              name="TOD"
              value="morning"
              checked={value === 'morning'}
              onChange={onChange}
              />
            <label className="checkboxLabel">MORNING</label>
          </div>

          <div className="checkboxContainer">
            <input 
              className="checkbox"
              type="radio"
              id="afternoon"
              name="TOD"
              value="afternoon"
              checked={value === 'afternoon'}
              onChange={onChange}
            />
            <label className="checkboxLabel">AFTERNOON</label>
          </div>

          <div className="checkboxContainer">
            <input 
              className="checkbox"
              type="radio"
              id="noPreference"
              name="TOD"
              value="noPreference"
              checked={value === 'noPreference'}
              onChange={onChange}
            />
            <label className="checkboxLabel">NO PREFERENCE</label>
          </div>

        </div>
    </>
  )
};

export default SingleSelection;