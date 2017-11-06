export function selectBook(book) {
  // selectBook is an actioncreator, it needs to return an action,
  // and object with a type.
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
