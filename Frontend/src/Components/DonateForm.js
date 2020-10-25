import React, { useState } from 'react';
import "../Components/DonateForm.css";
import { postDonation } from "../Utils/Api";

const DonateForm = ({ userId, projectId, buttonText }) => {

  const [paymentMethod, setPaymentMethod] = useState("CreditCard");
  const [amount, setAmount] = useState(0);
  const [comment, setComment] = useState("");
  const [errors, addError] = useState([]);

  const onSumbit = () => {
    postDonation({
      paymentMethod: `${paymentMethod}`,
      donatorId: userId,
      projectId: projectId,
      amount: parseInt(amount),
      comment: `${comment}`
    }).catch(error => {
      addError([...errors, { type: "send", error: "Hubo un error al enviar la donacion" }])
    });
  };

  const findErrorByType = (type) => {
    return errors.find(err => err.type === type)
      ? errors.find(err => err.type === type).error
      : "";
  }

  return (
    <section id="makeDonate">
      <form id="makeDonateForm">

        <div>
          <label htmlFor="makeDonateName"> Amount </label>
          <input
            onChange={e => setAmount(e.target.value)}
            type="numeric" size="35" id="makeDonateName" name="makeDonateName" />
        </div>

        <div>
          <label htmlFor="makeDonateSubject">PaymentMethod</label>
          <div
            style={{ background: paymentMethod === "DebitCard" ? "#83adf181" : "#6161619f" }}
            className="selectPayment"
            onClick={() => setPaymentMethod("DebitCard")}
          >
            Tarjeta de debito
          </div>
          <div
            style={{ background: paymentMethod === "CreditCard" ? "#83adf181" : "#6161619f" }}
            className="selectPayment"
            onClick={() => setPaymentMethod("CreditCard")}
          >
            Tarjeta de credito</div>
        </div>

        <div>
          <label htmlFor="makeDonatetMessage">Message</label>
          <textarea
            onChange={e => setComment(e.target.value)}
            cols="50"
            rows="5"
            id="makeDonateMessage"
            name="makeDonateMessage"
          ></textarea>
        </div>

        <div
          className="button-send"
          onClick={() => onSumbit()}
        >
          {buttonText}
        </div>
        {findErrorByType("send") &&
          <p className="donate-labelError">
            {findErrorByType("send")}
          </p>
        }
      </form>
    </section >
  );
}

export default DonateForm;