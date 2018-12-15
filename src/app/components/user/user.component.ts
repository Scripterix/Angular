import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: string;
  age: number;
  email: string;
  address: Address;
  hobbies: string[];

  constructor() {
    console.log('constructor ran...');
   }

  ngOnInit() {
    console.log('ngOnInit ran..');
    this.name = 'John Doe';
    this.age = 30;
    this.email = 'any@mail.com';
    this.address = {
      street: '50 Main Street',
      city: 'Boston',
      state: 'MA'
    };
    this.hobbies = [ 'Write Code' , 'Watch moovies' , 'Baking cackes' , 'roller coaster'  ];
    }
    onClick() {
      this.name = 'Piotr Adamkowski';
    }
  }


interface Address {
  street: string;
  city: string;
  state: string;
}
