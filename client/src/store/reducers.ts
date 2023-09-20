import { Actions, Action, Transaction } from "../types";

// Define the state type
export interface RootState {
  transactions: Transaction[];
}

// Initial state
const initialState: RootState = {
  transactions: []
};

const reducer = (state = initialState, action: Action<Transaction>): RootState => {
  switch (action.type) {
    // Define your actions
    case Actions.SendTransaction:
      return { transactions: [...state.transactions, action.payload] }
    default:
      return state;
  }
};

export default reducer;
