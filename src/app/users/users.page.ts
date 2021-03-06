import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../user.model';
@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {
  // user:User = new User();
  users:User;

  constructor(private usersService:UsersService) {}

  ngOnInit() {
    this.getUsers();
  }

  public getUsers(): void{
    this.usersService.getUsers().subscribe(
      (response:any) => {
        // console.log(response);
        this.users = response.users;
            }
    );
  }

}