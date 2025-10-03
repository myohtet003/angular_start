import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-api',
  imports: [],
  templateUrl: './get-api.html',
  styleUrl: './get-api.css'
})
export class GetApi implements OnInit {
  http = inject(HttpClient);
  userLists: any[] = [];
  toDoItems: any[] = [];

  ngOnInit(): void {
    // debugger;
    this.getUser();
    this.getToDoItems();
  }

  getUser() {
    // debugger;
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res:any) => {
      // debugger;
      this.userLists = res;
    })
  }

  getToDoItems() {
    this.http.get("https://jsonplaceholder.typicode.com/todos").subscribe((response:any) => {
      // debugger;
      // console.log(response);
      this.toDoItems = response;
    })
  }
}
