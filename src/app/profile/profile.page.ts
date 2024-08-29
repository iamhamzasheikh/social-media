import { Component, OnInit } from '@angular/core';
import {register} from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  private readonly imagePaths: string[] = [
    'assets/images/tom-cruise.jpg',
    'assets/images/tom.jpg',
    'assets/images/1672300616194.jpg',
    'assets/images/player-holding-img.jpg',
    'assets/images/1673873077921.jpg',
    'assets/images/1673870935203.jpg',
    'assets/images/football-img_1.jpg',
    'assets/images/IMG_20221227_153113.jpg',
    'assets/images/IMG_20220205_000705.jpg',
    'assets/images/1673871421334.jpg',
    'assets/images/player-holding-img.jpg',
    'assets/images/IMG_20220205_000705.jpg'
  ];

  slides: { image: string }[] = [];


  constructor() { }

  ngOnInit() {
    this.slides = this.imagePaths.map(path => ({ image: path }));
  }

}
