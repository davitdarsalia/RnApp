interface Hotels {
    id: number;
    name: string;
    location: string;
    city: string;
    latitude: string;
    longitude: string;
    price: number;
    discount_price: number;
    email: string;
    phone: string;
    description: string;
    first_photo: string;
}

interface HotelResponseTypes {
    message: string;
    allHotels: Array<Hotels>;
}
