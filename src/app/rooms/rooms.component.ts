import { Component } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent {

  hotelname = "hilton hotel";

  hiderooms=false;
  numberofrooms = 10;

  toggle(){
    this.hiderooms = !this.hiderooms;
  }

  rooms:Room = {
    totalRooms:20,
    availablRooms: 10,
    bookedRooms:5,
  };

  roomList:RoomList[] = [{
    roomNo: 1,
    roomType : 'Deluxe Room',
    amenities : 'AC,wi-fi, TV, Bathroom',
    price : 500,
    photos : "nothing",
    checkinTime : new Date('01-Dec-2023'),
    checkoutTime : new Date('01-Dec-2023'),

  },
  {
    roomNo:2,
    roomType : 'private Room',
    amenities : 'wi-fi, Bathroom',
    price : 100,
    photos : "nothing",
    checkinTime : new Date('29-Nov-2023'),
    checkoutTime : new Date('30-Nov-2023'),

  },
  {
    roomNo :3,
    roomType : 'Deluxe Room',
    amenities : 'AC,wi-fi, TV, Bathroom',
    price : 500,
    photos : "nothing",
    checkinTime : new Date('04-Dec-2023'),
    checkoutTime : new Date('04-Dec-2023'),

  }
]
}
