import { Book } from "../../reducers/interfaces";


export type ShoppingCartTableProps = {
    items: Book[];
    total: number;
    onIncrease: (id: number ) => void;
    onDecrease: (id: number) => void;
    onDelete: (id: number   ) => void;
}