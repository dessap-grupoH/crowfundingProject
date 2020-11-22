import React from 'react';
import "../Components/DetailItem.css";

const DetailItem = ({ icon, detail, detailTitle, isDonation, onClickItem, isCloseProjectButton }) => (
  <div className="detailContainer">
    <div className="detailLabel">{icon}{detailTitle}</div>
    <div
      className={
        [
          !isDonation ? "detailItem" : "donateItem",
          isCloseProjectButton ? "closeItem" : ""
        ]
          .join(" ")}
      onClick={onClickItem ? onClickItem : ""}
    >
      <p style={{ marginTop: "3px" }}>{detail}</p>
    </div>
  </div >
);

export default DetailItem;