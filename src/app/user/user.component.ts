import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  // User object with one propery
  user: {
    name: string;
  }
  isLoggedIn = false;
  data: string;

  constructor(private userService: UserService, private dataService: DataService) { }

  ngOnInit() {
    this.user = this.userService.user;
  }

}
