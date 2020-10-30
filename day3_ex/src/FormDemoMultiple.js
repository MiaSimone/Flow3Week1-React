import React, { useState } from "react";
import './App.css';
 
function ReservationForm() {
  const initialValue = {
    payByCreditCard: true,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    zip: "",
    country: ""
  };
  const [reservation, setReservation] = useState(initialValue);
 
  const handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setReservation({ ...reservation, [name]: value });
  };
 
  function handleSubmit(event) {
    event.preventDefault();
      window.alert(JSON.stringify(reservation));
  }

  return (
    <div>
    <h2>Handling multiple inputs</h2>
      <form onSubmit={handleSubmit}>
        <label>Pay by Credit Card: </label>
          <input
            name="payByCreditCard"
            type="checkbox"
            checked={reservation.payByCreditCard}
            onChange={handleChange}
          />
        <br />
        <input
          name="firstName"
          value={reservation.firstName}
          onChange={handleChange}
          placeholder="First Name"
        />
        <br />
        <input
          name="lastName"
          value={reservation.lastName}
          onChange={handleChange}
          placeholder="Last Name"
        />
        <br />
        <input
          name="email"
          value={reservation.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <br />
        <input
          name="phone"
          value={reservation.phone}
          onChange={handleChange}
          placeholder="Phone"
        />
        <br />
        <input
          name="street"
          value={reservation.street}
          onChange={handleChange}
          placeholder="Street"
        />
        <br />
        <input
          name="city"
          value={reservation.city}
          onChange={handleChange}
          placeholder="City"
        />
        <br />
        <input
          name="zip"
          value={reservation.zip}
          onChange={handleChange}
          placeholder="Zip Code"
        />
        <br />
        <input
          name="country"
          value={reservation.country}
          onChange={handleChange}
          placeholder="Country"
        />
        <br/>
        <input type="submit" value="Send" />
      </form>
      <p>{JSON.stringify(reservation)}</p>
      <br/>

      <div>
        <h4>Answer the following questions before you continue</h4>
        <p>In a Controlled Component React state is made the "Single source of truth", so how:</p>
        <p className="Q">- Do we ensure that input controls like text, textarea or select always present the value found in the components state?</p>
        <p className="answer">We do this by making a onChange function where we set the change using useState</p>
        <p className="Q">- Do we ensure that a controls’ state, always matches the value found in an input control?</p>
        <p className="answer">Same way as above. If the text input changes, so does the text area</p>
        <p className="Q">- What is the purpose of doing event.preventDefault() in an event handler?</p>
        <p className="answer">So that we have a SPA </p>
        <p className="Q">- What would be the effect of NOT doing event.preventDefault in a submit handler</p>
        <p className="answer">The page reloads if this is not added</p>
        <p className="Q">- Why don't we want to submit the traditional way, in a single page application?</p>
        <p className="answer">Fx because something could crash just because of the connection, there could come runtime errors.</p>
      </div>
      <br/><br/>
    </div>
  );
}
export default ReservationForm;