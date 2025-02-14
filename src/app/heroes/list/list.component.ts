import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  imports: [NgFor, NgIf],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public title:string = "Component ListComponent";
  public heroName:Array<string> = ["Starfire", "Okarun", "Bakugou", "Gojo", "Michi"];
  public copHeroName:Array<string> = [... this.heroName];
  //public isArrayEmpty:boolean = false;
  public deleteHero?:string | undefined;


  get arrayHeroNames():Array<string> {
    return this.arrayHeroNames;
  }

  deleteLastHero():void {
    this.deleteHero = this.heroName.pop();
    // if(this.heroName.length==0){
    //   this.isArrayEmpty = true;
    // }
  }

  resetHeroNames():void {
    this.deleteHero = undefined;
    this.heroName = [... this.copHeroName];
    //this.isArrayEmpty = false;
  }
}


