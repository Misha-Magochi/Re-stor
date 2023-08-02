import { Reducer } from "redux";
import { Book } from "../actions/interfaces";
import { ShoppingCartItem, ShoppingCartState, UpdateShoppingCartAction, } from "./interfaces"


const updateCartItems = (
  cartItems: ShoppingCartItem[],
  item: Book,
  idx: number
  ): ShoppingCartItem[] => {
  if (item.count === 0) {
    return [...cartItems.slice(0, idx), ...cartItems.slice(idx + 1)];
  }

  if (idx === -1) {
    return [...cartItems, item];
  }

  return [...cartItems.slice(0, idx), item, ...cartItems.slice(idx + 1)];
};

const updateCartItem = (
  book: Book, 
  item: Partial<Book>,
  quantity: number
  ): Book => {
  const { id = book.id, count = 0, title = book.title, total = 0, price = book.price || 0,} = item;
  const newCount = count !== undefined ? count + quantity : 0;
  const newTotal = price !== undefined ? total + quantity * price : 0;

  return {
    id,
    title,
    count: newCount,
    total: newTotal,
  };
};

const updateOrder = (
  state: ShoppingCartState,
  bookId: number,
  quantity: number
  ): ShoppingCartState => {
  const { books, cartItems } = state;

  const book: Book | undefined = books.find(({ id }) => id === bookId);
  const itemIndex = cartItems.findIndex(({ id }) => id === bookId);
  const item = cartItems[itemIndex];

  if(!book){
    console.error("Book not found in book list");
    return state;

  }

  const newItem = item 
  ? updateCartItem(book, item, quantity)
  : updateCartItem(book, {}, quantity);
  return {
    ...state,
    shoppingCart: {
    ...state.shoppingCart,
    cartItems: updateCartItems(cartItems, newItem, itemIndex),
    },
  };
};

const updateShoppingCart: Reducer<ShoppingCartState, UpdateShoppingCartAction> = (
  state = { cartItems: [], books: [], bookList: [], orderTotal: 0, shoppingCart: { cartItems: [] }},
   action) => {

  switch (action.type) {
    case "BOOK_ADDED_TO_CART":
      return updateOrder(state, action.payload, 1);

    case "BOOK_REMOVED_FROM_CART":
      return updateOrder(state, action.payload, -1);

    case "ALL_BOOKS_REMOVED_FROM_CART":
      const item = state.shoppingCart.cartItems.find(
        ({ id }) => id === action.payload,);
        const count = item?.count ?? 0;
      return updateOrder(state, action.payload, -count);

    default:
      return state;
  }
};

export default updateShoppingCart;
