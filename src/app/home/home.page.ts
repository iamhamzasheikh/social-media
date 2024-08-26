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
    'assets/images/',
    'assets/images/image4.jpg',
    'assets/images/image5.jpg',
    'assets/images/image6.jpg',
    'assets/images/image7.jpg',
    'assets/images/image8.jpg',
    'assets/images/image9.jpg',
    'assets/images/image10.jpg',
    'assets/images/image11.jpg',
    'assets/images/image12.jpg'
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
