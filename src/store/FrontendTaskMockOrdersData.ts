export enum Status {
  UNVERIFIED,
  REFUNDED,
  CANCELLED,
  VERIFIED,
  FULFILLED,
}

export type OrderStatus = keyof typeof Status;

export interface OrderType {
  orderID?: string;
  orderStatus: OrderStatus;
  companyName?: string;
  customerName?: string;
  purDate?: string;
  fulfillDate?: string;
  invoiceStatus?: "Paid" | "Unpaid";
  amount?: number;
  currency?: string;
}

export const orders: OrderType[] = [
  {
    orderID: "2544",
    orderStatus: "UNVERIFIED",
    companyName: "GÅRDSBUA AS",
    customerName: "John Doe",
    purDate: "26 Jan 2022",
    fulfillDate: "28 Jan 2022",
    invoiceStatus: "Paid",
    amount: 250,
    currency: "NOK",
  },
  {
    orderID: "2541",
    orderStatus: "UNVERIFIED",
    companyName: "GÅRDSBUA AS",
    customerName: "John Doe",
    purDate: "26 Jan 2022",
    fulfillDate: "26 Jan 2022",
    invoiceStatus: "Paid",
    amount: 400,
    currency: "NOK",
  },
  {
    orderID: "2540",
    orderStatus: "UNVERIFIED",
    companyName: "GÅRDSBUA AS",
    customerName: "John Doe",
    purDate: "27 Jan 2022",
    fulfillDate: "27 Jan 2022",
    invoiceStatus: "Paid",
    amount: 630,
    currency: "PKR",
  },
  {
    orderID: "2324",
    orderStatus: "UNVERIFIED",
    companyName: "GÅRDSBUA AS",
    customerName: "John Doe",
    purDate: "28 Jan 2022",
    fulfillDate: "1 Feb 2022",
    invoiceStatus: "Paid",
    amount: 400,
    currency: "USD",
  },
  {
    orderID: "6844",
    orderStatus: "UNVERIFIED",
    companyName: "SMITH CLINIC",
    customerName: "JAMES JOHNS",
    purDate: "1 Feb 2022",
    invoiceStatus: "Unpaid",
    amount: 400,
    currency: "USD",
  },
];
