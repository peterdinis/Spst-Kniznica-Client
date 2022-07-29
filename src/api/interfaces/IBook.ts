export interface IBook {
    id?: number;
    name: string;
    description: string;
    author: string;
    image: string;
    year: number;
    pages: number;
    avaiable: boolean;
    categoryId: number;
} 

export type SearchVal = Pick<IBook, 'name' |'author'>;