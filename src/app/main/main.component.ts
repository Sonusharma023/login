import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  constructor(private userService:UserService){}
  userLogin(data:any){
    console.warn(data)
    this.userService.login(data)
  }
}
