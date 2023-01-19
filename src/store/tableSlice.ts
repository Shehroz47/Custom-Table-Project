import { createSlice } from "@reduxjs/toolkit";
import { orders } from "../store/FrontendTaskMockOrdersData";
import type { PayloadAction } from "@reduxjs/toolkit";

import { OrderType } from "../store/FrontendTaskMockOrdersData";

const initialState = orders;

const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    deleteOrder: (state, action: PayloadAction<string | undefined>) => {
      return state.filter((item) => item.orderID !== action.payload);
    },

    sortingOrder: (state, action: PayloadAction<OrderType[]>) => {
      return (state = action.payload);
    },
  },
});

export default tableSlice.reducer;
export const { deleteOrder, sortingOrder } = tableSlice.actions;
