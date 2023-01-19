import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function ViewPage() {
  const { state } = useLocation();
  const navigate = useNavigate();

  console.log(state);

  return (
    <div className="view-page">
      <div>
        <h1 style={{ marginBottom: "40px", color: "#00becd" }}>Order #</h1>
        <h1>{state.orderID}</h1>
      </div>
      <div className="view-page-wrapper">
        <h1>
          {state.companyName} <br />
          <span>{state.customerName}</span>
        </h1>

        <div className="view-page-footer">
          <div>
            <p>
              <b>purDate: </b>
              {state.purDate}
            </p>
            <p>
              <b>fulfillDate: </b>
              {state.fulfillDate}
            </p>
            <p>
              <b>invoiceStatus: </b>
              {state.invoiceStatus}
            </p>
            <p>
              <b>fulfillDate: </b>
              {state.fulfillDate}
            </p>
            <p>
              <b>amount: </b>
              {state.amount}
            </p>
            <p>
              <b>currency: </b>
              {state.currency}
            </p>
          </div>
          <div>
            <button onClick={() => navigate("/orders")}>Back</button>
          </div>
        </div>
      </div>
    </div>
  );
}
