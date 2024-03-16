import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
user = new User();
newUser: User = new User();

  constructor(private userService: UserService, private router: Router) { }



  onSubmit() {
    console.log(this.user);
    this.userService.login(this.user).subscribe((token) => {
        window.alert("User Logged in Successfully");
        this.router.navigate(['home']);
    }, error => {
        window.alert("User Registration Error");
        console.log('Error: ', error)
    });
  }
  }

