import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  public title:string ="Component CounterComponent";
  public counter:number = 10;
  increaseCounter(n1:number, n2:number=0):void {
    this.counter+=n1;
    this.counter+=n2;
  }

  setCounter(n:number) {
    this.counter = n
  }
}
