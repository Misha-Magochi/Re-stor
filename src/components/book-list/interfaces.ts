

export type BookListContainerProps = {
    books: [];
    loading: boolean;
    error: any;
    fetchBooks: () => void;
    onAddedToCart: (id: number) => void;
}