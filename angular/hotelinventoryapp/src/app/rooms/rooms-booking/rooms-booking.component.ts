import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';


@Component({
  selector: 'hinv-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrls: ['./rooms-booking.component.scss']
})
export class RoomsBookingComponent implements OnInit {
  

  id: number = 0;
  id$ = this.router.paramMap.pipe(map(params => params.get('id')));
  //Activated router allows you to access info form the route
  //router is an observable
  constructor(private router: ActivatedRoute) {}
  
  ngOnInit(): void {

    //snapshot can be used but the value will never be changed in the same view. 
    // this.id = this.router.snapshot.params['id'];


    //allows to get more than one value
    //this.router.paramMap.subscribe((params) => { params.get('id'); })

    //suscribing is not good because it leads to leakage even though you can do this way
    // this.router.params.subscribe((params) => {
    //     this.id = params['id'];
    // });
  }
}
