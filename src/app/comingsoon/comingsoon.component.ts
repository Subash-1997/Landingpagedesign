import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comingsoon',
  templateUrl: './comingsoon.component.html',
  styleUrls: ['./comingsoon.component.scss']
})
export class ComingsoonComponent implements OnInit{
  targetDate: Date = new Date("Oct.28,.2023.15:34:24"); 
   days: number = 60;
   hours: number = 22;
   minutes: number = 30; 
   seconds: number = 21; 

    constructor() { } 
    ngOnInit(): void {
       this.updateCountdown(); 
       setInterval(() => this.updateCountdown(), 1000); 
      } 
      updateCountdown(): void { 
        const now = new Date();
         const timeDifference = this.targetDate.getTime() - now.getTime(); 


         this.days = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); 
         this.hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
         this.minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
         this.seconds = Math.floor((timeDifference % (1000 * 60)) / 1000); 
        }
       }