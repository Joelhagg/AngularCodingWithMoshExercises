import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  favorite: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {

    this.favorite = !this.favorite

    console.log(this.favorite);
    
  }

}
