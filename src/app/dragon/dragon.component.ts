import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dragon',
  templateUrl: './dragon.component.html',
  styleUrls: ['./dragon.component.scss']
})
export class DragonComponent implements OnInit {
  showMagnus = false; 
  toggleMagnus = 'Show Magnus'; 
  constructor() { }

  ngOnInit(): void {
  }

  DragonFunction(): void {
    this.showMagnus = !this.showMagnus;
    this.toggleMagnus = this.showMagnus? 'Hide Magnus' : 'Show Magnus';
  }

  

}
