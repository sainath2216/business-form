import React from "react";

const General = () => {
  return (
    <form>
      <h1 className="general-heading">
        Do you have any Business Email ID used for your Business? *
      </h1>
      <input type="radio" id="radio-option1" className="radio-color" />
      <label htmlFor="radio-option1" className="radio-color">
        Yes
      </label>
      <input type="radio" id="radio-option2" className="radio-color" />
      <label htmlFor="radio-option2" className="radio-color">
        No
      </label>
      <p className="radio-color">
        Any email ID used for Business. You will receive submitted details copy
        to the Email ID.
      </p>

      <h1 className="radio-color">Business Enterprise Name *</h1>
      <input type="text" />
      <p className="radio-color">
        In case of no Business Enterprise Name, kindly enter the name in which
        you are trading with the company.
      </p>
      <h1 className="radio-color">Ownership Type *</h1>
      <select>
        <option value="search-options">
          <input type="search" />
        </option>
        <option value="select">-Select-</option>
        <option value="comapny">Company</option>
        <option value="huf">HUF</option>
        <option value="individual">Individual</option>
        <option value="llp">LLP</option>
        <option value="parternship">Parternship</option>
        <option value="other">Other</option>
      </select>
      <p className="radio-color">
        Select your Business Enterprise Ownership Type
      </p>

      <h1 className="radio-color">Partner Type *</h1>
      <select>
        <option value="search-options">
          <input type="search" />
        </option>
        <option value="select-option">Select option.</option>
        <option value="vendor">Vendor</option>
        <option value="customer">Customer</option>
        <option value="both">Both</option>
      </select>
      <p className="radio-color">
        Select whether you are a vendor or customer or both to our organization.
      </p>
      <h1 className="radio-color">Website (optional)</h1>
      <input type="email" />
      <h1 className="radio-color">Select you place of Business. *</h1>
      <div>
        <input type="radio" id="radio-option1" />
        <label htmlFor="radio-option1" className="radio-color">
          Within India (Domestic)
        </label>
        <br/>
        <input type="radio" id="radio-option2" />
        <label htmlFor="radio-option2" className="radio-color">
          Outside India (Import/Export)
        </label>
      </div>
      <p className="radio-color">
        The place of Business will determine whether it is mandatory to collect
        Tax Compliance Details.
      </p>
    </form>
  );
};

export default General;
