import { Component, OnInit } from '@angular/core';
import { FilmsServiceService } from '../films-service.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  harryPotter!: any;
  fastAndFurious!: any;
  starWars!: any;
  title1 = 'Harry Potter';
  title2 = 'Fast And Furious';
  title3 = 'Star Wars';

  constructor(private films$: FilmsServiceService) {}
  scrollRight(n: number) {
    let scroll = document.querySelectorAll('.budka-saga');
    scroll[n].scrollLeft -= 200;
  }
  scrollLeft(n: number) {
    let scroll = document.querySelectorAll('.budka-saga');
    let maxScroll = scroll[n].scrollWidth - scroll[n].clientWidth;
    scroll[n].scrollLeft += 200;
    console.log(maxScroll);
    if (scroll[n].scrollLeft === maxScroll) scroll[n].scrollLeft = 0;
  }

  ngOnInit(): void {
    this.films$.getFilms('harry', 'potter').subscribe((films) => {
      this.harryPotter = films.Search;
      console.log(this.harryPotter);
    });
    this.films$.getFilms('fast', 'and%20furious').subscribe((films) => {
      this.fastAndFurious = films.Search;
      console.log(this.harryPotter);
    });
    this.films$.getFilms('star', 'wars').subscribe((films) => {
      this.starWars = films.Search;
      console.log(this.harryPotter);
    });
  }
}
