import { IProduct } from "../interface"

export const products = (): IProduct[] => {
    return [
        {
            id: 1,
            name: "Beds",
            size: 1.2,
            icon: 'bed',
            amount: 0
        },
        {
            id: 2,
            name: "Refrigerador",
            size: 1,
            icon: 'refrigerator',
            amount: 0
        },
        {
            id: 3,
            name: "Furniture",
            size: 0.5,
            icon: 'furniture',
            amount: 0
        },
        {
            id: 4,
            name: "Oven",
            size: 0.6,
            icon: 'oven',
            amount: 0
        },
        {
            id: 5,
            name: "Sofa",
            size: 1.5,
            icon: 'sofa',
            amount: 0
        },
        {
            id: 6,
            name: "TV",
            size: 0.25,
            icon: 'tv',
            amount: 0
        },
        {
            id: 7,
            name: "Washer-dryer",
            size: 0.5,
            icon: 'washer-dryer',
            amount: 0
        },
        {
            id: 8,
            name: "Dining",
            size: 2,
            icon: 'dining',
            amount: 0
        },
        {
            id: 9,
            name: "Desk",
            size: 0.75,
            icon: 'desk',
            amount: 0
        },
        {
            id: 10,
            name: "Wardrobe",
            size: 3.2,
            icon: 'wardrobe',
            amount: 0
        },
    ]
}