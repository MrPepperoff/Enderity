export interface Product{
    id: number,
    icon?: string,
    name: string,
    category: 'coin' | 'privilege' | 'item',
    price: number,
    price_old: number | null,
    bonus: number | null,
    inStock: boolean
}

export const coins: Product[] =[
    {
        id:1,
        icon: 'coin/99.png',
        name: '99',
        bonus: null,
        category: 'coin',
        price: 99,
        price_old: null,
        inStock: true
    },
    {
        id:2,
        icon: 'coin/179.png',
        name: '199',
        bonus: 20,
        category: 'coin',
        price: 179,
        price_old: null,
        inStock: true
    },
    {
        id:3,
        icon: 'coin/299.png',
        name: '299',
        bonus: 20,
        category: 'coin',
        price: 279,
        price_old: null,
        inStock: true
    },
    {
        id:4,
        icon: 'coin/499.png',
        name: '499',
        bonus: 50,
        category: 'coin',
        price: 449,
        price_old: null,
        inStock: true
    },
    {
        id:5,
        icon: 'coin/799.png',
        name: '799',
        bonus: 50,
        category: 'coin',
        price: 749,
        price_old: null,
        inStock: true
    },
    {
        id:6,
        icon: 'coin/999.png',
        name: '999',
        bonus: 100,
        category: 'coin',
        price: 899,
        price_old: null,
        inStock: true
    },
    {
        id:7,
        icon: 'coin/1999.png',
        name: '1999',
        bonus: 200,
        category: 'coin',
        price: 1799,
        price_old: null,
        inStock: true
    },
    {
        id:8,
        icon: 'coin/4999.png',
        name: '4999',
        bonus: 400,
        category: 'coin',
        price: 4699,
        price_old: null,
        inStock: true
    },
    {
        id:9,
        icon: 'coin/9999.png',
        name: '9999',
        bonus: 500,
        category: 'coin',
        price: 9499,
        price_old: null,
        inStock: true
    },
]