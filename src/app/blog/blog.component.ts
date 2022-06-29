import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../model/blog-post';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  leftSideBlogPosts: BlogPost[] = [
    {
      imageUrl: '../../assets/blog-1.png',
      title: 'November 2018',
      header: 'Graphic Design & Branding',
      text: 'Specializing in front end development. Experienced with all stages of development cycle for dynamic web projects. Well-versed in numerous programming languages including JavaScript, SQL, and C. Stng background in project management and customer relations.',
      button: 'Read More',
      CommentsIcon: 'comment',
      NumberOfCommentsIcon: '3',
    },

    {
      imageUrl: '../../assets/blog-2.PNG',
      title: 'November 2018',
      header: 'Graphic Design & Branding',
      text: 'Specializing in front end development. Experienced with all stages of development cycle for dynamic web projects. Well-versed in numerous programming languages including JavaScript, SQL, and C. Stng background in project management and customer relations.',
      button: 'Read More',
      CommentsIcon: 'comment',
      NumberOfCommentsIcon: '3',
    },

    {
      imageUrl: '',
      title: "November 2018",
      header: "How to show your product in the world?",
      text: "Specializing in front end development. Experienced with all stages of development cycle for dynamic web projects. Well-versed in numerous programming languages including JavaScript, SQL, and C. Stng background in project management and customer relations. Well-versed in numerous programming languages including JavaScript, SQL, and C. Stng background",
      button: "Read More",
      CommentsIcon: "comment",
      NumberOfCommentsIcon: "3",
    }
  ];

  rightSideBlogPosts: BlogPost[] = [
    {
      imageUrl:"../../assets/blog-3.PNG",
      title:"November 2018",
      header:"Graphic Design & Branding",
      text:"Specializing in front end development. Experienced with all stages of development cycle for dynamic web projects. Well-versed in numerous programming languages including JavaScript, SQL, and C. Stng background in project management and customer relations.",
      button:"Read More",
      CommentsIcon:"comment",
      NumberOfCommentsIcon:"3",
    },
{
      imageUrl: '',
      title:"November 2018",
      header:"How to show your product in the world?",
      text:"Specializing in front end development. Experienced with all stages of development cycle for dynamic web projects. Well-versed in numerous programming languages including JavaScript, SQL, and C. Stng background in project management and customer relations.Well-versed in numerous programming languages including JavaScript, SQL, and C. Stng background",
      button:"Read More",
      CommentsIcon:"comment",
      NumberOfCommentsIcon:"3" ,
    },
    {
      imageUrl:"../../assets/blog-4.PNG",
      title:"November 2018",
      header:"Graphic Design & Branding",
      text:"Specializing in front end development. Experienced with all stages of development cycle for dynamic web projects. Well-versed in numerous programming languages including JavaScript, SQL, and C. Stng background in project management and customer relations.",
      button:"Read More",
      CommentsIcon:"comment",
      NumberOfCommentsIcon:"3",
}
  ];

  constructor() {}

  ngOnInit(): void { }
  
  isFirstElement(i:number): boolean {
    if (i == 0) {
      return true;
    } else {
      return false;
    }
  }
}
