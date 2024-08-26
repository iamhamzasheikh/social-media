import { Component } from '@angular/core';
import {register} from 'swiper/element/bundle';
register();


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

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

  private readonly icons: string[] = [
    'add',
    'heart',
    'star',
    'home',
    'person',
    'calendar',
    'camera',
    'cart',
    'chatbubble',
    'map',
    'musical-notes',
    'restaurant'
  ];

  slides: { image: string; icon: string }[];

  constructor() {
    this.slides = Array(12).fill(0).map((_, index) => ({
      image: this.imagePaths[index] || '',
      icon: this.icons[index] || 'add'
    }));
  }
}
