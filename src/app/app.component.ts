import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from "./counter/counter.component";
import { HeroesComponent } from "./heroes/heroes.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CounterComponent, HeroesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular19';
  greet = "hello mamanotevayas";
  title2 = '2º atc';
}
