import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { BlogHttpService } from '../blog-http.service';

import { ActivatedRoute, Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

  constructor(private blogHttpService: BlogHttpService, private _route:ActivatedRoute, private router:Router, private toastr: ToastrService) { 
    
   }

  //  At first better to initialize the variables.
  // To avoid errors in future.


   public blogTitle: string;
   public blogBodyHtml: string;
   public blogDescription: string;
   public blogCategory: string;
   public possibleCategories = ["Comedy", "Drama", "Action", "Technology"];


  ngOnInit() {
  }

  public createBlog(): any{
    let blogData = {
      title: this.blogTitle,
      description: this.blogDescription,
      blogBody:this.blogBodyHtml,
      category: this.blogCategory
    }
    
    this.blogHttpService.createBlog(blogData).subscribe(
      
      data => {
        console.log("Blog Created");
        console.log(data);
        this.toastr.success('Blog Posted Successfully', 'Success');
        setTimeout(() => {
          this.router.navigate(['/blog',data.data.blogId]);
        }, 2000)
      },
      error=> {
        console.log("Some error occured");
        console.log(error.errorMessage);
        alert("Some error occured");
      }
    )

  } // end create blog method.

  

}
