export interface ICategory {
    id?: any;
    name: string;
    description: string;
}

export type SearchVal = Pick<ICategory, 'name'>;