import React from "react";

const Declaration = () => {
  return (
    <div>
      <div>
        <h1>
          In view of the Finance Act, 2021 introduced a new section 206AB, we
          hereby certify that we have filed the ITR and aggregate of tax
          deducted at source and tax collected at source in our case in 26AS is
          more/ less than INR 50,000 for immediately preceding two previous
          years i.e., for FY 2021-22 and FY 2022-23, details of which are as
          follows.
        </h1>
        <h2>
          Turnover of our company/entity during FY 2022-23 exceeding Rs. 10 crs
          (Yes/No) *
        </h2>
        <input type="radio" id="fyyes" />
        <label htmlFor="fyyes">Yes</label>

        <input type="radio" id="fyno" />
        <label htmlFor="fyno">No</label>

        <h2>
          Have your filed Income Tax Return for in the following Financial Year
          - F.Y. 2020-21, F.Y. 2021-22 and F.Y. 2022-23 ? *
        </h2>
        <input type="radio" id="incomeyes" />
        <label htmlFor="incomeyes">Yes</label>

        <input type="radio" id="incomeno" />
        <label htmlFor="incomeno">No</label>
        <p>
          If Yes, Kindly submit the Acknowledgement No and Filing Date for said
          Financial Year. For F.Y. 2022-23 is optional.
        </p>

        <label htmlFor="acknowledgement">Acknowledgement No (F.Y. 2020-21) *</label>
        <input type="text" id="acknowledgement"/>

        <label htmlFor="date">Date of Filing (F.Y. 2020-21) *</label>
        <input id="date" type="date"/>
        <p>dd-MM-yyyy</p>

        <label htmlFor="date">Acknowledgement No (F.Y. 2022-23) </label>
        <input id="date" type="date"/>
        <p>Submit if you have filed ITR.</p>

        <label htmlFor="date">Date of Filing (F.Y. 2022-23)</label>
        <input id="date" type="date"/>
        <p>dd-MM-yyyy</p>
        <p>Submit if you have filed ITR.</p>



      </div>
    </div>
  );
};

export default Declaration;
