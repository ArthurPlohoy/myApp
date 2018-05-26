import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cal',
  templateUrl: './cal.component.html',
  styleUrls: ['./cal.component.css','./style.scss']
})
export class CalComponent implements OnInit {

  public num1: number;
  public num2: number;
  public result: number;

  cal_add() {
    this.result = this.num1 + this.num2
  }

  public num1: number;
  public num2: number;
  public result: number;

  cal_sub() {
    this.result = this.num1 - this.num2
  }

  public num1: number;
  public num2: number;
  public result: number;

  cal_mul() {
    this.result = this.num1 * this.num2
  }

  public num1: number;
  public num2: number;
  public result: number;

  cal_div() {
    this.result = this.num1 / this.num2
  }

  constructor() { }

  ngOnInit() {
  }

}
