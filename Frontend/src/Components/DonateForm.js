import React, { useState } from 'react';
import { useTranslation } from "react-i18next"
import "../Components/DonateForm.css";
import { postDonation } from "../Utils/Api";

const DonateForm = ({ userId, projectId, onDonation }) => {

  const [paymentMethod, setPaymentMethod] = useState("CreditCard");
  const [amount, setAmount] = useState(0);
  const [comment, setComment] = useState("");
  const [errors, addError] = useState([]);
  const [t] = useTranslation("global");

  const onSumbit = () => {
    postDonation({
      paymentMethod: `${paymentMethod}`,
      donatorId: userId,
      projectId: projectId,
      amount: parseInt(amount, 10),
      comment: `${comment}`
    }).then(resp => onDonation(resp.data))
      .catch(_ => {
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
          <input
            onChange={e => setAmount(e.target.value)}
            type="numeric" size="35" id="makeDonateName" name="makeDonateName"
            placeholder={t("donation-form.amount-label")}
          />
        </div>

        <div>
          <div
            style={{ background: paymentMethod === "DebitCard" ? "#83adf181" : "#6161619f" }}
            className="selectPayment"
            onClick={() => setPaymentMethod("DebitCard")}
          >
            {t("donation-form.payment-method.debit-card")}
          </div>
          <div
            style={{ background: paymentMethod === "CreditCard" ? "#83adf181" : "#6161619f" }}
            className="selectPayment"
            onClick={() => setPaymentMethod("CreditCard")}
          >
            {t("donation-form.payment-method.credit-card")}
          </div>
        </div>
        <div>
          <textarea
            onChange={e => setComment(e.target.value)}
            cols="50"
            rows="5"
            id="makeDonateMessage"
            name="makeDonateMessage"
            placeholder={t("donation-form.message-label")}
          ></textarea>
        </div>

        <div
          className="button-send"
          onClick={() => onSumbit()}
        >
          {t("projects.donate-send")}
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