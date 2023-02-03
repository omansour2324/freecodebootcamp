import { Component, OnInit, Self } from '@angular/core';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'hinv-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  // providers: [RoomsService] //Per instance setup
  
})
export class EmployeeComponent implements OnInit {

   empName: string = 'John'

  //@Self Keyword to make sure the service is only avaliable at this level. 
  constructor(private roomsService: RoomsService) {}
  ngOnInit(): void {
    
  }
}
