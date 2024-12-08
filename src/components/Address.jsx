import React from "react";

const Address = () => {
  return (
    <div>
      <h1>Instructions</h1>
      <ul>
        <li>First Address Shall be treated as Primary Address.</li>
        <li>You can submit any number of addresses.</li>
      </ul>

      <h2>#1 - Business Address</h2>
      <h3>Business Address Type *</h3>
      <select>
        <option value="search-options">
          <input type="search" />
        </option>
        <option value="select">-Select-</option>
        <option value="comapny">Bill to</option>
        <option value="huf">Ship to</option>
        <option value="individual">Both</option>
      </select>

      <label htmlFor="address1">Address Line 1 *</label>
      <input type="text" id="address1" />

      <label htmlFor="address2">Address Line 2 *</label>
      <input type="text" id="address2" />

      <label htmlFor="city">City *</label>
      <input type="text" id="city" />

      <label htmlFor="state">State *</label>
      <input type="text" id="state" />
      <p>State/Region/Province</p>

      <label htmlFor="pincode">Pin code *</label>
      <input type="text" id="pincode" />
      <p>Postal / Zip Code</p>

      <h1>Would you like to add more addresses? *</h1>
      <input type="radio" id="more-yes" />
      <label htmlFor="more-yes">Yes</label>

      <input type="radio" id="more-no" />
      <label htmlFor="more-no">No</label>
    </div>
  );
};

export default Address;
