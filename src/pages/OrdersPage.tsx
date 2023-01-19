import React from "react";

// Hooks
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

//action
import { sortingOrder } from "../store/tableSlice";

// component
import { TableHeader } from "../components/table/TableHeader";
import { TableContent } from "../components/table/TableContent";

// types Interfaces
import { OrderType } from "../store/FrontendTaskMockOrdersData";
import { ColumnType } from "../common/types";
import { SortingType } from "../common/types";
import { IRootState } from "../store/store";

function OrdersPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //It takes in a function argument that returns the part of the state that you want.
  const data = useSelector((state: IRootState) => state.table); // data = [{},{},{}]

  const [searchValue, setSearchValue] = useState<string>("");
  const [sorting, setSorting] = useState<SortingType>({
    column: "orderID",
    order: "asc",
  });

  const columns: ColumnType[] = [
    { field: "orderID", title: "Order #" },
    { field: "orderStatus", title: "Order status" },
    { field: "customerName", title: "Customer" },
    { field: "purDate", title: "Purchase date" },
    { field: "fulfillDate", title: "Fullfilled date" },
    { field: "invoiceStatus", title: "Invoice status" },
    { field: "amount", title: "Amount" },
    { field: "", title: "" },
  ];

  // Handlers
  const sortingTable: (newSorting: {
    column: string;
    order: string;
  }) => void = (newSorting: { column: string; order: string }) => {
    // type of sortedOrders?
    let sortedOrders: any;

    if (newSorting.order === "desc") {
      sortedOrders = [...data].sort(
        (p1: OrderType, p2: OrderType) =>
          p1[newSorting.column] > p2[newSorting.column]
            ? 1 // true no swipe
            : p1[newSorting.column] < p2[newSorting.column]
            ? -1 // -1 means swipe
            : 0 // no swipe
      );
    } else if (newSorting.order === "asc") {
      sortedOrders = [...data].sort((p1: OrderType, p2: OrderType) =>
        p1[newSorting.column] < p2[newSorting.column]
          ? 1
          : p1[newSorting.column] > p2[newSorting.column]
          ? -1
          : 0
      );
    }

    dispatch(sortingOrder(sortedOrders));
    setSorting(newSorting);
  };

  const handleView: (page: OrderType) => void = (page: OrderType) => {
    console.log(page);
    navigate("/orders/view-page", { state: page });
  };

  const search = (data: OrderType[]) => {
    console.log(data);
    // data in arr [{},{},{}]
    return data?.filter(
      //{}
      (item) =>
        item.orderID?.includes(searchValue) ||
        item.companyName?.toLowerCase().includes(searchValue?.toLowerCase()) ||
        item.customerName?.toLowerCase().includes(searchValue?.toLowerCase())
    );
  };

  return (
    <div className="Table">
      <div className="table-container">
        <div className="search-bar">
          <form>
            <input
              type="text"
              name="search"
              placeholder="Search by Order Id, Customer, Buyer..."
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
            />
          </form>
        </div>

        <table className="user-table">
          <TableHeader
            columns={columns}
            sorting={sorting}
            sortingTable={sortingTable}
          />
          <TableContent data={search(data)} handleView={handleView} />
        </table>
      </div>
    </div>
  );
}

export { OrdersPage };
