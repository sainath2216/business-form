import React from "react";

const GovtDetails = () => {
  return (
    <div>
      <div>
        <h1>GST Details</h1>
        <h2>GST Registration Type *</h2>
        <select>
          <option value="search-options">
            <input type="search" />
          </option>
          <option value="select">-Select-</option>
          <option value="regular">Regular</option>
          <option value="composite supplier">Composite Supplier</option>
          <option value="unregistered">Unregistered</option>
          <option value="consumer">Consumer</option>
        </select>
        <p>Select your GST Registration Type.</p>

        <h1>PAN Details</h1>
        <h2>PAN No *</h2>
        <input type="text" />
        <p>Enter PAN Number. If PAN is not available, input "PANNOTAVBL".</p>

        <h1>Upload PAN *</h1>
        <input type="file" required />

        <h1>MSME/Udyog Aadhaar Details</h1>
        <h2>Do you have MSME/Udyog Aadhaar No? *</h2>
        <input type="radio" id="msme" />
        <label htmlFor="msme">Yes</label>
        <input type="radio" id="msme1" />
        <label htmlFor="msme1">No</label>

        <h2>MSME/ Udyog Aadhaar No *</h2>
        <input type="text" />
        <h2>MSME/ Udyog Aadhaar Certificate *</h2>
        <input type="file" required />

        <div>
          <button>Back</button>
          <button>Next</button>
        </div>
      </div>
    </div>
  );
};

export default GovtDetails;
