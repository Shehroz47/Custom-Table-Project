import React from "react";

import { AiFillDelete } from "react-icons/ai";
import { GrView } from "react-icons/gr";
import { BsThreeDots } from "react-icons/bs";
import { MdOutlineDateRange } from "react-icons/md";

import { deleteOrder } from "../../store/tableSlice";
import { useDispatch } from "react-redux";

import { OrderType } from "../../store/FrontendTaskMockOrdersData";

export function TableContent({
  data,
  handleView,
}: {
  data: OrderType[];
  handleView: (page: OrderType) => void;
}) {
  const dispatch = useDispatch();

  // Actions Dropdown
  function handleDropDown(e: any) {
    e.target.nextSibling.classList.toggle("show");
  }

  // Close the dropdown if the user clicks outside of it
  window.onclick = function (e: any) {
    console.log(e.target);
    if (!e.target.matches(".dropbtn")) {
      var dropdowns = document.getElementsByClassName("dropdown-content"); //[]
      var i: number;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };

  return (
    <tbody>
      {data?.map(
        (
          entry: OrderType // entry {}
        ) => (
          <tr key={entry.orderID} className="user-table-body-row">
            <td
              key={entry.orderID + "-orderID"}
              className="user-table-body-cell"
            >
              {entry.orderID}
            </td>

            <td
              key={entry.orderID + "-" + entry.orderStatus}
              className="user-table-body-cell"
            >
              {entry.orderStatus}
            </td>

            <td
              key={entry.orderID + "-" + entry.customerName}
              className="user-table-body-cell company-left-align"
            >
              <div className="customer-columns">
                <h4 className="companyName">{entry.companyName}</h4>
                <span className="customerName">{entry.customerName}</span>
              </div>
            </td>

            <td
              key={entry.orderID + "-" + entry.purDate}
              className="user-table-body-cell iconColumn"
            >
              <div className="dateWithIcon blueIcon">
                {entry.purDate && (
                  <p>
                    <MdOutlineDateRange />
                  </p>
                )}
                <p>{entry.purDate}</p>
              </div>
            </td>
            <td
              key={entry.orderID + "-1" + entry.fulfillDate}
              className="user-table-body-cell "
            >
              <div className="dateWithIcon greenIcon">
                {entry.fulfillDate && (
                  <p>
                    <MdOutlineDateRange />
                  </p>
                )}
                <p>{entry.fulfillDate}</p>
              </div>
            </td>
            <td
              key={entry.orderID + "-" + entry.invoiceStatus}
              className="user-table-body-cell"
            >
              {entry.invoiceStatus}
            </td>

            <td
              key={entry.orderID + "-" + entry.amount}
              className="user-table-body-cell amountAndAction"
            >
              <div className="amount-container">
                <h4 className="amount">
                  <span>{entry.currency} </span>
                  {entry.amount + ".00"}
                </h4>
              </div>
            </td>
            <td>
              <div className="dropdown">
                <BsThreeDots
                  className="dropbtn"
                  onClick={(e) => handleDropDown(e)}
                ></BsThreeDots>
                <div id="myDropdown" className="dropdown-content">
                  <button
                    onClick={() => dispatch(deleteOrder(entry?.orderID))}
                    className="delete-button"
                  >
                    <AiFillDelete />
                  </button>
                  <button onClick={() => handleView(entry)}>
                    <GrView />
                  </button>
                </div>
              </div>
            </td>
          </tr>
        )
      )}
    </tbody>
  );
}
