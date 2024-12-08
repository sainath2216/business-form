import React from "react";

const BankDetails = () => {
  return (
    <div>
      <h1>Business Bank Details.</h1>
      <div className="bank-details-container">
        <label htmlFor="account-name">Bank Business Account Name *</label>
        <input type="text" id="account-name" />
        <p>Enter you bank account name.</p>

        <label htmlFor="account-number">Bank Account No. *</label>
        <input type="text" id="account-number" />
        <p>Enter Bank Account Number.</p>

        <label htmlFor="bank-name">Bank Account No. *</label>
        <input type="text" id="bank-name" />
        <p>Enter your Business Bank Name.</p>

        <label htmlFor="ifsc">IFSC Code *</label>
        <input type="text" id="ifsc" />
        <p>Which of the following would you like to upload? *</p>

        <div>
          <input type="radio" id="radio-cheque" />
          <label htmlFor="radio-cheque">Cancelled Cheque</label>
          <br />
          <input type="radio" id="radio-copy" />
          <label htmlFor="radio-copy">Scanned Passbook Copy (First Page)</label>
          <br />
          <input type="radio" id="radio-statement" />
          <label htmlFor="radio-statement">Bank Statement</label>
          <br />
          <input type="radio" id="radio-letter" />
          <label htmlFor="radio-letter">
            Letter Head (For Virtual Account)
          </label>
        </div>
        <h1>Upload Cancelled Cheque / Scanned Passbook Copy / Statement *</h1>
        <input type="file" required />
      </div>
    </div>
  );
};

export default BankDetails;
