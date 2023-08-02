
export type BookListItemProps = {
    onAddedToCart: () => void;
    book:{
        title: string;
        author: string;
        price: number;
        coverImage: string;
    }
}