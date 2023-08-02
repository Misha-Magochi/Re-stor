import { Book } from "../reducers/interfaces";
  
  export interface BooksRequestedAction {
    type: "FETCH_BOOKS_REQUEST";
  }
  
  export interface BooksLoadedAction {
    type: "FETCH_BOOKS_SUCCESS";
    payload: Book[];
  }
  
  export interface BooksErrorAction {
    type: "FETCH_BOOKS_FAILURE";
    payload: string;
  }
  
  export interface BookAddedToCartAction {
    type: "BOOK_ADDED_TO_CART";
    payload: string;
  } 
  
  export interface BookRemovedFromCartAction {
    type: "BOOK_REMOVED_FROM_CART";
    payload: string;
  }

  export interface CartAction {
    type: "BOOK_ADDED_TO_CART" | "ALL_BOOKS_REMOVED_FROM_CART";
    payload: string; 
  }
  
  export interface AllBooksRemovedFromCartAction {
    type: "ALL_BOOKS_REMOVED_FROM_CART";
    payload: string;
  }



export type { Book };
