import React from "react";

const Instructions = () => {
  return (
    <div>
      <form className="">
        <h1 className="instruction-heading">
          As per the regulations, it is mandatory for all companies and
          individuals to submit their KYC details. As part of regular KYC
          collection and updating, we request you kindly submit the below
          requested KYC details.
        </h1>

        <h2 className="note-heading">Note: Submit separately for different GST's .</h2>
        <hr />
        <h3 className="instruction-heading">
          Kindly ensure following details are available before submission,
        </h3>
        <ol>
          <li className="instruction-heading">Business Name</li>
          <li className="instruction-heading">
            Business Ownership Type (Company, Partnership, LLP ,
            Individual/Others)
          </li>
          <li className="instruction-heading">Address (Can submit multiple)</li>
          <li className="instruction-heading">GST No</li>
          <li className="instruction-heading">PAN No</li>
          <li className="instruction-heading">MSME/Udyog Aadhaar No</li>
          <li className="instruction-heading">Contact Person Name, Designation & Number.</li>
          <li className="instruction-heading">
            Bank Details ( Bank Account Name, Account No, Branch Name, Bank
            Name, IFSC Code and either of Cancelled Bank Cheque or Bank Passbook
            or Statement )
          </li>
          <li className="instruction-heading">
            Turnover Declaration (Last 2 F.Y. Acknowledgement No and Filing
            Date)
          </li>
          <li className="instruction-heading">Submitter Declaration (Name, Designation and Email ID)</li>
          <li className="instruction-heading">
           <span className="note-heading"> Other Attachment: </span>PAN Card, GST Certificate, MSME Certificate,
            Dealership Certificates (Only for Dealership) and TDS Certificates
            (Only for Transporters).
          </li>
        </ol>

        <p className="instruction-heading">Kindly click on "Next" to proceed.</p>

        <button>Next</button>
      </form>
    </div>
  );
};

export default Instructions;
