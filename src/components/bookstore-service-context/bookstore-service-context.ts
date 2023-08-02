import React from "react";

interface BookstoreServiceContextType {
  someValue: string;
  someMethod: () => void;
}

const {
  Provider: BookstoreServiceProvider,
  Consumer: BookstoreServiceConsumer,
} = React.createContext<BookstoreServiceContextType>({ someValue: "", someMethod: () => {} });

export { BookstoreServiceProvider, BookstoreServiceConsumer };
