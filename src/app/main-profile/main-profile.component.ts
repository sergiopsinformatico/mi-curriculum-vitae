import { Component, OnInit } from '@angular/core';
import { faGreaterThan, faLessThan } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'main-profile',
  templateUrl: './main-profile.component.html',
  styleUrls: ['./main-profile.component.css']
})
export class MainProfileComponent implements OnInit {

  showDevelopment: boolean;
  faGreaterThan = faGreaterThan;
  faLessThan = faLessThan;

  constructor() { }

  ngOnInit(): void {
    this.showDevelopment = false;
  }

  openNewDevelopment(){
    this.showDevelopment = true;
  }

  openOldDevelopment(){
    this.showDevelopment = false;
  }

}
