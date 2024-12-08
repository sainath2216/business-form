import React from "react";

const ContactPerson = () => {
  return (
    <div>
      <div>
        <h1>Contact Person Name *</h1>
        <div>
          <div>
            <select>
              <option value="search-options">
                <input type="search" />
              </option>
              <option value="select">-Select-</option>
              <option value="mr">Mr.</option>
              <option value="mrs">Mrs.</option>
              <option value="ms">Ms.</option>
            </select>
            <p>Title</p>
            <p>Last Name is optional.</p>
          </div>
          <div>
            <input type="text" id="firstname" />
            <label htmlFor="firstname">First Name</label>
          </div>
          <div>
            <input type="text" id="lastname" />
            <label htmlFor="lastname">Last Name</label>
          </div>
        </div>
        <label htmlFor="designation">Contact Person Designation *</label>
        <input id="designation" type="text" />
        <div>
          <label htmlFor="contact">Contact Number *</label>
          <input id="contact" type="tel" />
        </div>
        <h1>Do you have contact person Email ID? *</h1>
        <input type="radio" id="mail" />
        <label htmlFor="mail">Yes</label>
        <input type="radio" id="no-mail" />
        <label htmlFor="no-mail">No</label>
        
      </div>
    </div>
  );
};

export default ContactPerson;
