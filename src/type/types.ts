export interface ProductItemType {
    title: string;
    price: number;
    image: string;
    id: number;
}

export interface CollectionItemType {
    id: number;
    title: number;
    image: string;
    description: string;
    category: string;
    thumbImage: string | null;
}
