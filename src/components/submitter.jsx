import React from "react";

const Submitter = () => {
  return (
    <div>
      <h1>Submitter Name</h1>
      <select>
        <option value="search-options">
          <input type="search" />
        </option>
        <option value="select">-Select-</option>
        <option value="comapny">Mr.</option>
        <option value="huf">Mrs.</option>
        <option value="individual">Ms</option>
      </select>
      <p>Title</p>

      <input type="text" id="firstname" />
      <label htmlFor="firstname">First Name</label>

      <input type="text" id="lastname" />
      <label htmlFor="firstname">Last Name</label>

      <p>Designation/Department</p>
      <input type="text" />

      <h1>Terms and Conditions *</h1>

      <p>
        By submitting this form, I hereby solemnly declare that the information
        provided in this form is correct and up-to-date to the best of my
        knowledge.
      </p>

      <input type="checkbox" id="checkbox" />
      <label>I accept. </label>

      <h1>Verification Code *</h1>
    </div>
  );
};

export default Submitter;
