import { Component } from '@angular/core';
import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";

@Component({
  selector: 'app-heroes',
  imports: [HeroComponent, ListComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {

}
