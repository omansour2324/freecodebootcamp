import { HttpEventType } from '@angular/common/http';
import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnDestroy,
  OnInit,
  QueryList,
  SkipSelf,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { catchError, map, Observable, of, Subject, Subscription } from 'rxjs';
import { HeaderComponent } from '../header/header.component';
import { Room, RoomList } from './rooms';
import { RoomsService } from './services/rooms.service';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked, OnDestroy
{
  hotelName = 'Hilton Hotel';
  numberOfRooms = 10;
  hideRooms = true;

  selectedRoom!: RoomList;

  //@SkipSelf: skips that the service is available in more than one splace. 
  constructor(@SkipSelf() private roomsService: RoomsService) {}
  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  roomList: RoomList[] = [];
  title = 'Room List';
  totalBytes = 0;

  subscription !: Subscription

  //base class for streams in rxjs
  error$ = new Subject<string>();

  getError$ = this.error$.asObservable();

  //Async Pipe setup: Will allow for automatic sub/unsub from streams
  //Downside: it has to subscribe multiple times
  //Downside: next shouldn't be written inside a component because the change get triggered. 
  rooms$ = this.roomsService.getRooms$.pipe(
    catchError((err) => {
      console.log(err);
      this.error$.next(err.message);
      return of([]);
    })
  )

  //map operators
  //modifies data inside of a stream, we took an array and turned it into a count
  roomsCount$ = this.roomsService.getRooms$.pipe(
    map((rooms) => rooms.length)
  )

  //Stream: This is how observable work there are subscribers to this stream who 
  //pick up new data. 
  // stream = new Observable<string>(observer => {
  //   observer.next('user1');
  //   observer.next('user2');
  //   observer.next('user3');
  //   observer.complete();
  //   //observer.error('error');
  // })

  //creates an instance of the component.
  //set static to true will make component ready at ngOnInit if false it will be undefined.
  //keep static false as default, can cause issues with async programming
  @ViewChild(HeaderComponent, { static: false }) headerComponent!: HeaderComponent;

  //always static will be false
  @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>;

  //ngOnChanges happens before ngOnInit
  //applies after the constructor is finished.
  //constructors should not have blocking code that is what ngOnInit is for.
  //this is when the component is initialized.
  ngOnInit(): void {
    //produces undefined header Components
    //console.log(this.headerComponent);

    //Streams: this is how they work
    // this.stream.subscribe({
    //   next: (value) => console.log(value),
    //   complete: () => console.log('complete'),
    //   error: (err) => console.log(err)
    // });
    // this.stream.subscribe((data) => {console.log(data);})

    this.roomsService.getPhotos().subscribe((event) => {
      switch(event.type) {
        case HttpEventType.Sent: {
          console.log('Request has been made');
          break;
        }
        case HttpEventType.ResponseHeader: {
          console.log('Request Success')
          break;
        }
        case HttpEventType.DownloadProgress: {
          this.totalBytes+= event.loaded;
          break;
        }
        case HttpEventType.Response: {
          console.log(event.body);
        }
      }
    });

    // this.roomsService.getRooms$.subscribe(rooms => {
    //   this.roomList = rooms;
    // });
  }

  //Checks event that have happened in the whole application. (Rarely will be used)
  //Try to avoid using this unless necessary.
  //ngOnChanges/Docheck hould not be implemented together because they will do similiar the same thing.
  //ngOnChanges listens to componenents/Do checks is evaluated for everything.
  ngDoCheck(): void {
    console.log('on changes is called');
  }

  //initilizes header component. It is because the component is available after.
  ngAfterViewInit(): void {
    
    //Set After View 
    // this.headerComponent.title = 'Rooms View';


    //how to access children and it array of information. 
    //this.headerChildrenComponent.last.title = "Last Title";
    // this.headerChildrenComponent.forEach(x => {
    //   this.title = "I";
    // });
  }

  //called after view init above
  ngAfterViewChecked(): void {
    //this.headerComponent.title = "Rooms View(s)"
  }

  ngOnDestroy(): void {
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = 'Rooms List';
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }

  addRoom() {
    const room: RoomList = {
      // roomNumber: '4',
      roomType: 'Delexue Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 500,
      photos: 'https://images.unsplash.com/photo',
      checkinTime: new Date('11-Nov-2022'),
      checkoutTime: new Date('12-Nov-2022'),
      rating: 4.5,
    };

    this.roomsService.addRoom(room).subscribe((data) => {
      this.roomList = data;
    })
    

    //this.roomList.push(room);
    //OnPush: event you need to create a new instance for the prinipal of immutability.
    this.roomList = [...this.roomList, room];
  }

  editRoom() {
    
    const room: RoomList = {
      roomNumber: '3',
      roomType: 'Delexue Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 500,
      photos: 'https://images.unsplash.com/photo',
      checkinTime: new Date('11-Nov-2022'),
      checkoutTime: new Date('12-Nov-2022'),
      rating: 4.5,
    };

    this.roomsService.updateRoom(room).subscribe((data) => {
      this.roomList = data;
    });
  }

  //perfer soft vs hard deletes in your system. 
  deleteRoom() {
    this.roomsService.deleteRoom('3').subscribe((data) => {
      this.roomList = data;
    }); 
  }
}
