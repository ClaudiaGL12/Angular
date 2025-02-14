import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [NgIf],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public title:string = "Component HeroComponent";
  public name:string = "Ironman";
  public age:number = 30;

  constructor(){
    this.name="Starfire";
    this.age=20;
  }

  tellMeTheProperties():string {
    return this.name + " - " + this.age;
  }

  get theName ():string{
    return this.name.toUpperCase();
  }

  changeName():void {
    this.name="Claudia";
  }

  changeAge():void {
    this.age=19;
  }

  reset():void {
    this.name="Starfire"
    this.age=20;
  }
}
