import React, { useState } from 'react';
import { useTranslation } from "react-i18next"
import Toast from "../Components/Generics/Toast";
import { postDonation } from "../Utils/Api";
import "../Components/DonateForm.css";

const DonateForm = ({ userId, projectId }) => {

  const [paymentMethod, setPaymentMethod] = useState("CreditCard");
  const [amount, setAmount] = useState(0);
  const [comment, setComment] = useState("");
  const [errors, addError] = useState([]);
  const [successToast, setSuccessToast] = useState(false);
  const [errorToast, setErrorToast] = useState(false);
  const [t] = useTranslation("global");

  const onSumbit = () => {
    if (!isValidAmount()) {
      addError([...errors, { type: "amount", error: "Monto invalido a donar" }]);
      setErrorToast(true);
    } else {
      postDonation({
        paymentMethod: `${paymentMethod}`,
        donatorId: userId,
        projectId: projectId,
        amount: parseInt(amount, 10),
        comment: `${comment}`
      }).then(() => setSuccessToast(true))
        .catch(_ => {
          addError([...errors, { type: "send", error: "Hubo un error al enviar la donacion" }])
          setErrorToast(true);
        });
    };
  };

  const isValidAmount = () => {
    return amount > 0
  };

  const handleCloseErrorToast = () => {
    let newErros = errors.slice(1);
    addError(newErros);
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
      </form>
      <Toast
        content={errors.length > 0 && errors[0].error}
        open={errorToast}
        handleClose={() => setErrorToast(false)}
      />
      <Toast
        content={"La operacion fue realizada con exito"}
        succes
        open={successToast}
        handleClose={() => setSuccessToast(false)}
      />
    </section >
  );
}

export default DonateForm;