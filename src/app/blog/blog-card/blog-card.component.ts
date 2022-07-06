import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.css']
})
export class BlogCardComponent implements OnInit {
  @Input() imageUrl: string = '';
  @Input() title: string = '';
  @Input() header: string = '';
  @Input() text: string = '';
  @Input() button: string = '';
  @Input() CommentsIcon: string = '';
  @Input() NumberOfCommentsIcon: string = '';
  @Input() isWhiteBackground: boolean = false;

  textArray: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }
  getSlicedText() {
    var partOne = this.text.slice(0, 255);
    var partTwo = this.text.slice(255);
    return [partOne,partTwo];
}
}
