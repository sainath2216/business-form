import "./App.css";
import CheckoutStepper from "./components/stepper";

import Instructions from "./components/instructions";
import General from "./components/general";
import BankDetails from "./components/bankDetails";
import GovtDetails from "./components/govtDetails";
import ContactPerson from "./components/contactPerson";
import Address from "./components/Address";
import Declaration from "./components/declaration";
import Submitter from "./components/submitter";

const CHECKOUT_STEPS = [
  {
    name: "Instructions",
    Component: () => (
      <div>
        <Instructions />
      </div>
    ),
  },
  {
    name: "General",
    Component: () => (
      <div>
        <General />
      </div>
    ),
  },
  {
    name: "Bank Details",
    Component: () => (
      <div>
        <BankDetails />
      </div>
    ),
  },
  {
    name: "GST, PAN & MSME/ Udyog Aadhaar",
    Component: () => (
      <div>
        <GovtDetails />
      </div>
    ),
  },
  {
    name: "Contact Person",
    Component: () => (
      <div>
        <ContactPerson />
      </div>
    ),
  },
  {
    name: "Address Details",
    Component: () => (
      <div>
        <Address />
      </div>
    ),
  },
  {
    name: "Turnover Declaration",
    Component: () => (
      <div>
        <Declaration />
      </div>
    ),
  },
  {
    name: "Submitter Declaration",
    Component: () => (
      <div>
        <Submitter />
      </div>
    ),
  },
];

function App() {
  return (
    <div className="form-container">
      <div className="form-card">
        <h1 className="main-heading">
          Business Partner <span className="main-span">Registration Form</span>
        </h1>
        <CheckoutStepper stepsConfig={CHECKOUT_STEPS} />
      </div>
    </div>
  );
}

export default App;
