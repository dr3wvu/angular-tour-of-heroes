import { Component, OnInit } from '@angular/core';
import { Device, Battery } from '../hero';

@Component({
  selector: 'app-smart',
  templateUrl: './smart.component.html',
  styleUrls: ['./smart.component.css']
})
export class SmartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

devices: Device[] = [
  {id: 0, Device: 'Android 9276', in: '05/05/2020', out: 'currently in use'},
  {id: 1, Device: 'Android 1000', in: '2019', out: '2019'},
  {id: 2, Device: 'Android 5012', in: '01/01/2019', out: '01/01/2019'},
]
batteries: Battery[] = [
  {id: 0, battryNum: 'A928GH282716612', in: '05/05/2020', out: 'currently in use'},
  {id: 1, battryNum: '72124381000', in: '2019', out: '2019'},
  {id: 2, battryNum: '10239501233', in: '01/01/2019', out: '01/01/2019'},
]

}
