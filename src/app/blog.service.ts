import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  // Declare a dummy blog variable here.
  public allBlogs = [
    {

      author: "Shahrukh Sayyed",
      imageUrl: 'https://s3-ap-southeast-1.amazonaws.com/theguywithideas/blog/home-bg.jpg',
      bodyHtml: "Let's start!",
      subHeading: "What it mean?",
      heading: "Let's talk about e-commerce",
      created: "2018-03-08T03:14:47.036Z",
      blogId: "1",
      tags: ['flipkart', 'amazon']
    },
    {

      author: "Amit",
      imageUrl: "https://s3-ap-southeast-1.amazonaws.com/theguywithideas/blog/home-bg.jpg",
      bodyHtml: '<a href="http://tutorials.jenkov.com/angularjs/views-and-directives.html">Click here</a>',
      subHeading: "Link",
      heading: "Jenkov Link",
      created: "2018-03-08T07:58:20.300Z",
      blogId: "2",
      tags: ['link1', 'link2']
    },
    {

      author: "ravi bhagat",
      imageUrl: 'https://s3-ap-southeast-1.amazonaws.com/theguywithideas/blog/home-bg.jpg',
      bodyHtml: "hello guys",
      subHeading: "testing and deleting",
      heading: "Testing Blog",
      created: "2018-05-29T11:44:08.880Z",
      blogId: "3",
      tags: ['Unit', 'Automation']
    }
  ];

  public currentBlog;
  
  constructor() {
    console.log("Blog Service Constructor Called");
   }

  public getAllBlogs():any{
    return this.allBlogs;
  }

  public getCurrentBlog(currentBlogId) {
    for (let blog of this.allBlogs) {
      if (blog.blogId === currentBlogId) {
        this.currentBlog = blog;
      }
    }
    return this.currentBlog;
  }
}
