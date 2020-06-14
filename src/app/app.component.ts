import { Component, OnInit } from '@angular/core';
import { UserService } from './Services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  emailList = []

  title = 'myWebApp';

  constructor(private user:UserService){ }

 ngOnInit(){
  this.user.getEmailList()
  .then(emails=>{
    this.emailList = emails;
    
  })
  .catch(error=>console.log(error))

  }
}
