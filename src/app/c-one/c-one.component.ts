import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c-one',
  templateUrl: './c-one.component.html',
  styleUrls: ['./c-one.component.css']
})
export class COneComponent implements OnInit {

  title = 'one';

  constructor() { }

  ngOnInit(): void {
  }

}
