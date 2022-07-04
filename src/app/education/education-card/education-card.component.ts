import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-education-card',
  templateUrl: './education-card.component.html',
  styleUrls: ['./education-card.component.css'],
})
export class EducationCardComponent implements OnInit {
  @Input() title: string = '';
  @Input() header: string = '';
  @Input() text: string = '';

  constructor() {}

  ngOnInit(): void {}
}
