export interface IBook {
    id?: number;
    name: string;
    description: string;
    author: string;
    image: string;
    year: number;
    status: string;
} 

export type SearchVal = Pick<IBook, 'name' |'author'>;