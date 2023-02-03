import { Inject, Injectable } from '@angular/core';
import { RoomList } from '../rooms';
import { environment } from '../../../environments/environment';
import { APP_SERVICE_CONFIG } from '../../AppConfig/appconfig.service';
import { AppConfig } from '../../AppConfig/appconfig.interface';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {

  roomList: RoomList[] = []

  //A stream can only be modified inside of a pipe. 
  //$stream is a dollar sign as context. 
  //shareReplay allows you to cache data. 
  //subscribing everywhere in app without closing the stream affects performance. 
  //inceptors in angular js are used for this type of thing for http
  
  getRooms$=this.http.get<RoomList[]>('/api/rooms').pipe(
    shareReplay(1)
  );

  constructor(
    @Inject(APP_SERVICE_CONFIG) private config: AppConfig,
    private http: HttpClient
  ) {
    console.log(this.config.apiEndpoint);
    console.log('Room Service Init.......');
  }

  //this return a type called observable
  //Observable: It is a component that works rxjs. It is eventing data around. 
  //It is a continous stream for data using push vs pull architecture. 
  //You don't need to get the data again updating the stream everybody will have access to the data. 
  getRooms() {

    
    return this.http.get<RoomList[]>('/api/rooms');
  }

  addRoom(room: RoomList) {
    return this.http.post<RoomList[]>('/api/rooms', room);
  }

  updateRoom(room: RoomList) {
    return this.http.put<RoomList[]>(`api/rooms/${room.roomNumber}`, room);
  }

  deleteRoom(id: string){
    return this.http.delete<RoomList[]>(`api/rooms/${id}`)
  }

  getPhotos() {

    //display that shows a loader
    const request = new HttpRequest(
      'GET', 
      `https://jsonplaceholder.typicode.com/photos`, 
    {
      reportProgress: true,
    });

    return this.http.request(request);
  }
}
