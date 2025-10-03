import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  imports: [FormsModule],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User implements OnInit { 
  http = inject(HttpClient);
  userLists: any[] = [];
  userObj: any = {
    "userId": 0,
    "emailId": "",
    "password": "",
    "fullName": "",
    "mobileNo": ""
  }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.http.get("https://api.freeprojectapi.com/api/GoalTracker/getAllUsers").subscribe((res:any) => {
      this.userLists = res;
    })
  }

  postUser() {
    this.http.post("https://api.freeprojectapi.com/api/GoalTracker/register", this.userObj).subscribe({
      next: (response:any) => {
        alert("User Registered Successfully");
        this.getUser(); 
      },
      error: (err:any) => {
        alert("Something went wrong");
      }
    })
  }
}
