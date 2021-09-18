// Generated by https://quicktype.io

export interface IGetItems {
    author:     Author;
    categories: string[];
    items:      Item[];
}

export interface Author {
    name:     string;
    lastname: string;
}

export interface Item {
    id:           string;
    title:        string;
    price:        Price;
    picture:      string;
    condition:    Condition;
    free_shiping: boolean;
}

export enum Condition {
    Nuevo = "Nuevo",
    Usado = "Usado",
}

export interface Price {
    currency: string;
    amount:   number;
    decimals: number;
}