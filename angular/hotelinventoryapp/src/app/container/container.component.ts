import { AfterContentInit, Component, ContentChild, Host, OnInit } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'hinv-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  // providers: [RoomsService]
})
export class ContainerComponent implements OnInit, AfterContentInit{
  
  @ContentChild(EmployeeComponent) employee! : EmployeeComponent;
  
  //@Host get instance from this service or lower not above in the lifecycle. 
  //constructor(@Host() private roomsService: RoomsService) {}
  constructor() {}

  ngOnInit(): void {
    
  }

  ngAfterContentInit(): void {
    this.employee.empName = 'Rick'
    console.log(this.employee);
  }
  
}
