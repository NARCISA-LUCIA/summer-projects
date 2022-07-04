import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-portofolio-card',
  templateUrl: './portofolio-card.component.html',
  styleUrls: ['./portofolio-card.component.css'],
})
export class PortofolioCardComponent implements OnInit {
  @Input() title: string = '';
  @Input() imageUrl: string = '';
  @Input() articleUrl: string = '';

  constructor() {}

  ngOnInit(): void {}
}
