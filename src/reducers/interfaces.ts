
export interface Book {
  id: number;
  title: string;
  count: number;
  total: number;
  price?: number | undefined;
}

export interface CartItem {
  id: number;
  count: number;
}

export interface BookListState {
    books: Book[];
    loading: boolean;
    error: string | null;
  }

  export interface CartState {
    cartItems: CartItem[];
    orderTotal: number;
  }

  export interface ShoppingCartItem {
    id: number;
    title: string;
    count: number;
    total: number;
  }

  export interface ShoppingCartState {
    cartItems: never[];
    books: Book[];
    bookList: Book[];
    orderTotal: number;
    shoppingCart: { cartItems: Book[]; };
  }

  export interface UpdateShoppingCartAction {
    type: string;
    payload: any;
  }

  export interface RootState {
    bookList: BookListState;
    shoppingCart: ShoppingCartState;
  }