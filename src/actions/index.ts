import { BooksRequestedAction,
  BooksLoadedAction,
  BooksErrorAction,
  BookAddedToCartAction,
  BookRemovedFromCartAction,
  AllBooksRemovedFromCartAction,
  Book,
} from "./interfaces";



export const booksRequested = (): BooksRequestedAction => {
  return {
    type: "FETCH_BOOKS_REQUEST",
  };
};

const booksLoaded = (newBooks: Book[]): BooksLoadedAction => {
  return {
    type: "FETCH_BOOKS_SUCCESS",
    payload: newBooks,
  };
};

const booksError = (error: string): BooksErrorAction => {
  return {
    type: "FETCH_BOOKS_FAILURE",
    payload: error,
  };
};

export const bookAddedToCart = (bookId: number): BookAddedToCartAction => {
  return {
    type: "BOOK_ADDED_TO_CART",
    payload: String(bookId),
  };
};

export const bookRemovedFromCart = (bookId: number): BookRemovedFromCartAction => {
  return {
    type: "BOOK_REMOVED_FROM_CART",
    payload: String(bookId),
  };
};

export const allBooksRemovedFromCart = (bookId: number): AllBooksRemovedFromCartAction => {
  return {
    type: "ALL_BOOKS_REMOVED_FROM_CART",
    payload: String(bookId),
  };
};

const fetchBooks = (bookstoreService: any, dispatch: any) => () => {
  dispatch(booksRequested());
  bookstoreService
    .getBooks()
    .then((data: Book[]) => dispatch(booksLoaded(data)))
    .catch((err: string) => dispatch(booksError(err)));
};

export { fetchBooks };
