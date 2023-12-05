export interface Room{
    availablRooms:number;
    bookedRooms:number;
    totalRooms:number;
}

export interface RoomList{
    roomNo:number;
    roomType : string;
    amenities: string;
    price : number;
    photos : string;
    checkinTime : Date;
    checkoutTime: Date
}