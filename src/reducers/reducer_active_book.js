//State argument is not application state, only state this reducer is responisible for.
export default function(state = null, action) {
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
    default:
      return state;
  }
}
