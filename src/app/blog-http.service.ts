import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";

@Injectable({
  providedIn: 'root'
})
export class BlogHttpService {

  public allBlogs;
  public currentBlog;

  public baseUrl = 'https://blogapp.edwisor.com/api/v1/blogs';
  private authToken = 'YWFhYzMwMWY5YjNiM2Q1ZGRlYmQ3ZjYzZWJkNDExN2RkY2IwZWRhODhiMjY0NTMwZmVmMDhlYmJmOTdmMGYzOTViN2YyM2QzMmExMTI0OGM4ZDllNGM0Yzk2ZjQwYzE0MzQ4M2Y4MDczODEyYThhZGU0NzM2NjNiYjJkYTYzYTIzNWUz'
  constructor(private _http:HttpClient) {
    console.log("Blog http service was called");
  }

  // Get All Blogs for Home Component
  public getAllBlogs(): any {
    let myResponse = this._http.get(this.baseUrl + `/all?authToken=${this.authToken}`);
    console.log(myResponse);
    return myResponse;
  }

  // Get Current Blog for Blog View Component
  public getCurrentBlog(currentBlogId) {
    let myResponse = this._http.get(this.baseUrl + `/view/${currentBlogId}?authToken=${this.authToken}`);
    console.log(myResponse);
    return myResponse;
  }

  // Post the blog data to Blog Create Component
  public createBlog(blogData): any{
    let myResponse = this._http.post(this.baseUrl + `/create?authToken=${this.authToken}`, blogData);
    return myResponse;
  }

  // get blog id and Delete a blog.
  public deleteBlog(blogId): any{
    let data = {};
    let myResponse = this._http.post(this.baseUrl + `/${blogId}/delete`, data);
    return myResponse;
  }

  // get the blog id and blog data for Blog Edit component.
  public editBlog(blogId, blogData): any{
    let myResponse = this._http.put(this.baseUrl +`/${blogId}/edit`, blogData);
    return myResponse;
  }
}
