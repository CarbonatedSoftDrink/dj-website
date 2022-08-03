import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function PackageForm(props) {
  const [inputs, setInputs] = useState({
    eventType: "",
    eventSize: "",
    eventDate: "",
    contactName: "",
    phoneNumber: "",
    emailAddress: "",
    additional: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const sendFormPromise = sendForm();
    toast.promise(
      sendFormPromise,
      {
        loading: "Sending...",
        success: "Your message has been sent, thank you!",
      },
      { loading: { position: "bottom-center" } },
      { success: { duration: 8000, position: "bottom-center" } }
    );

    setTimeout(() => {
      props.closeAfterSubmit();
    }, 1500);
  };

  const sendForm = async () => {
    try {
      const fetchData = await fetch(
        "https://formsubmit.co/ajax/e6d5ab319530c607a40d9dee7541426d",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            "Package": props.selectedPackage,
            "Event Type": inputs.eventType,
            "Event Size": inputs.partySize,
            "Event Date": inputs.eventDate,
            "Contact Name": inputs.contactName,
            "Contact Number": inputs.phoneNumber,
            "Contact Email": inputs.emailAddress,
            "Additional Information": inputs.additional,
          }),
        }
      );
      setInputs({});

      return fetchData;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="package-form-container">
      <Toaster></Toaster>
      <div className="package-form-inputs">
        <form className="package-form" onSubmit={handleSubmit}>
          
          <div className="package-form__group">
            <label className="package-form__label">
              Type of Event
              </label>

              <input
                className="package-form__input"
                type="text"
                name="eventType"
                value={inputs.eventType || ""}
                onChange={handleChange}
              />
          </div>

          <div className="package-form__group">
            <label className="package-form__label">Estimated Event Size (# of people)</label>
            <input
              className="package-form__input"
              type="number"
              name="eventSize"
              value={inputs.eventSize || ""}
              onChange={handleChange}
            />
          </div>

          <div className="package-form__group">
            <label className="package-form__label">Date (If Known)</label>
            <input
              className="package-form__input"
              type="date"
              name="eventDate"
              value={inputs.eventDate || ""}
              onChange={handleChange}
            />
          </div>

          <div className="package-form__group">
            <label className="package-form__label">Contact Name</label>
            <input
              className="package-form__input"
              type="text"
              name="contactName"
              value={inputs.contactName || ""}
              onChange={handleChange}
            />
          </div>

          <div className="package-form__group">
            <label className="package-form__label">Phone Number</label>
            <input
              className="package-form__input"
              type="text"
              name="phoneNumber"
              value={inputs.phoneNumber || ""}
              onChange={handleChange}
            />
          </div>

          <div className="package-form__group">
            <label className="package-form__label">Email Address</label>
            <input
              className="package-form__input"
              type="email"
              name="emailAddress"
              value={inputs.emailAddress || ""}
              onChange={handleChange}
            />
          </div>

          <div className="package-form__group">
            <label className="package-form__label">Additional Comments?</label>
            <textarea
              className="package-form__input"
              type="textbox"
              name="additional"
              value={inputs.additional || ""}
              onChange={handleChange}
            />
          </div>

          <input
            className="btn btn-primary package-form__button"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
}
