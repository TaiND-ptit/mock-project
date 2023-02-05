
export interface Product {
    id: number;
    name: string,
    price: number,
    quantity: number,
    description: string,
    images: {
        image: string;
    },
    total: number
}

export type Products = Pick<Product, 'id' | 'name' | 'price' | 'quantity' | 'description' | 'images' | 'total'>[]