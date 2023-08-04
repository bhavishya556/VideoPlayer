import React, { useState } from "react";

const Ad = ({ onAdSubmit }) => {
  const [userAnswer, setUserAnswer] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
   
    onAdSubmit(userAnswer);
  };

  return (
    <div>
      {/* Add your ad content here */}
      <form onSubmit={handleFormSubmit}>
        <p>Please select your age:</p>
        <input
          type="radio"
          id="age1"
          name="age"
          value="0 - 30"
   
        />
        <label htmlFor="age1">0 - 30</label>
        <input
          type="radio"
          id="age2"
          name="age"
          value="31 - 60"
       
        />
        <label htmlFor="age2">31 - 60</label>
        <input
          type="radio"
          id="age3"
          name="age"
          value="61 - 100"
    
        />
        <label htmlFor="age3">61 - 100</label>
        <button type="submit">Submit</button>
      </form>
   
    </div>
  );
};

export default Ad;
