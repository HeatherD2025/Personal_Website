import React from "react";
import { useState } from "react";
import "../styles/contactForm.css";

function SingleSelection({value, onChange}) {

  return (
    <>
        <div className="col-75">
          <div className="checkbox-container">
            <input 
              style={{
                marginRight: ".5rem",
              }}
              type="radio"
              id="morning"
              name="TOD"
              value="morning"
              checked={value === 'morning'}
              onChange={onChange}
              />
            <label className="checkbox-label">MORNING</label>
          </div>

          <div className="checkbox-container">
            <input 
              style={{
                marginRight: ".5rem",
              }}
              type="radio"
              id="afternoon"
              name="TOD"
              value="afternoon"
              checked={value === 'afternoon'}
              onChange={onChange}
            />
            <label className="checkbox-label">AFTERNOON</label>
          </div>

          <div className="checkbox-container">
            <input 
              style={{
                marginRight: ".5rem",
              }}
              type="radio"
              id="noPreference"
              name="TOD"
              value="noPreference"
              checked={value === 'noPreference'}
              onChange={onChange}
            />
            <label className="checkbox-label">NO PREFERENCE</label>
          </div>

        </div>
    </>
  )
};

export default SingleSelection;