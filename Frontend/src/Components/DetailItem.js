import React from 'react';
import "../Components/DetailItem.css";

const DetailItem = ({ icon, detail, detailTitle, isDonation, onClickItem }) => (
  <div className="detailContainer">
    <div className="detailLabel">{icon}{detailTitle}</div>
    <div
      className={!isDonation ? "detailItem" : "donateItem"}
      onClick={onClickItem ? onClickItem : ""}
    >
      <p style={{ marginTop: "3px" }}>{detail}</p>
    </div>
  </div >
);

export default DetailItem;