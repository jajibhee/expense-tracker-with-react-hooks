//reducer helps us change our state and send it down to our component but we can't just change it, we have to create a new one and send it down.

export default (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          transaction => transaction.id !== action.id
        )
      };
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [action.transaction, ...state.transactions]
      };
    default:
      return state;
  }
};
