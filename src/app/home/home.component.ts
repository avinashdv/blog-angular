import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  public allBlogs= [];

  constructor( public blogHttpService:BlogHttpService) { 
    // Never call the services on constructor.
    //Constructors are for initialization purposes only.
    console.log("Home Component constructor called");
  }

  ngOnInit() {
    //this.allBlogs = this.blogHttpService.getAllBlogs();
    this.blogHttpService.getAllBlogs().subscribe(
      data => {
        this.allBlogs = data["data"];
      },
      error => {
        console.log("Some error occured");
        console.log(error.errorMessage);
      }
    );
    console.log("Home Component On Init called");
  }
  
  ngOnDestroy() {
    console.log("Home Component Destroyed");
  }

}
