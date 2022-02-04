
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class Book {
    id: string;
    title: string;
}

export abstract class IQuery {
    abstract books(): Book[] | Promise<Book[]>;

    abstract book(bookId: string): Book | Promise<Book>;

    abstract todos(): Todo[] | Promise<Todo[]>;
}

export class Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

type Nullable<T> = T | null;
