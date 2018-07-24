import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { BlogHttpService } from '../blog-http.service';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {

  public currentBlog;

  public possibleCategories = ["Comedy", "Drama", "Action", "Technology"];
  constructor(private _route:ActivatedRoute, private router: Router, private blogHttpService: BlogHttpService, private toastr:ToastrService) {
    
  
  }

  ngOnInit() {
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);
    this.blogHttpService.getCurrentBlog(myBlogId).subscribe(
      data => {
        console.log(data);
        this.currentBlog = data["data"];
        console.log("Current Blog is ");
        console.log(this.currentBlog);
      },
      error => {
        console.log("Some error occured");
        console.log(error.errorMessage);
      }
    )
  }

  public editThisBlog():any {
    console.log(this.currentBlog.blogId);
    console.log(this.currentBlog);
    this.blogHttpService.editBlog(this.currentBlog.blogId, this.currentBlog).subscribe(
      data => {
        console.log(data);
        this.toastr.success('Blog edited successfully', 'success!');
        setTimeout(() => {
          this.router.navigate(['/blog', this.currentBlog.blogId]);
        }, 1000)
      }
    )
  }

}
