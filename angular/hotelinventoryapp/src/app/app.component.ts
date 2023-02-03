import { AfterViewInit, Component, ElementRef, OnInit, Optional, ViewChild, ViewContainerRef, Inject } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { LoggerService } from './shared/services/logger.service';
import { localStorageToken } from './localstorage.token'
import { InitService } from './shared/services/init.service';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
 

  title = 'hotelinventoryapp';
  role = 'Admin';

  //@Optional() allows you to optional inject the service you can use ? on the service.
  //You can use localStorage/SessionStorage or any other javascript things by injecting them like we did. 
  constructor(@Optional() private loggerService: LoggerService, 
              @Inject(localStorageToken) private localStorage: any,
              private initService: InitService ) 
  {
    console.log(initService.config);
  }
  
  @ViewChild('name', { static: true }) name!: ElementRef;
  ngOnInit(): void {
      this.loggerService?.log('AppComponenet.ngOnInt()');
      // console.log(this.name.nativeElement.innerText = "Hilton Hotel");
      this.localStorage.setItem('name', 'Hilton Hotel');
  }

  // @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;
  // ngAfterViewInit(): void {
  //   const componentRef = this.vcr.createComponent(RoomsComponent);
  //   componentRef.instance.numberOfRooms = 50;
  // }
}
