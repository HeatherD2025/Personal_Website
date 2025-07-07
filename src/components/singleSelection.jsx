import React from "react";
import { useState } from "react";

function SingleSelection() {
  const [selectedOption, setSelectedOption] = useState(null)

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };


  return (
    <>
      <label
        htmlFor="email"
        className="form-label"
      >PREFERRED TIME OF CONTACT</label>
        <div className="checkboxSection">
          <label className="checkbox">MORNING</label>
            <input 
              type="radio"
              id="morning"
              name="TOD"
              value="morning"
              checked={selectedOption === 'morning'}
              onChange={handleOptionChange}
              />
          <label className="checkbox">AFTERNOON</label>
            <input 
              type="radio"
              id="afternoon"
              name="TOD"
              value="afternoon"
              checked={selectedOption === 'afternoon'}
              onChange={handleOptionChange}
            />
                      <label className="checkbox">NO PREFERENCE</label>
            <input 
              type="radio"
              id="noPreference"
              name="TOD"
              value="noPreference"
              checked={selectedOption === 'noPreference'}
              onChange={handleOptionChange}
            />
        </div>
    </>
  )
};

export default SingleSelection;