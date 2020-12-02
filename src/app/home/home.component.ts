import { Component, OnInit } from '@angular/core';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor(private TokenService: TokenService) { }

  ngOnInit() {
    this.getAddress();
  }


  getAddress() {
    this.TokenService.getAddressFromDeskTop().subscribe(data => {
      console.log(data, 'data from desktop');
    })
  }


}
