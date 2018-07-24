import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Importing the router module.
import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BlogService } from './blog.service';
import { BlogHttpService } from './blog-http.service';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    BlogViewComponent,
    BlogCreateComponent,
    BlogEditComponent,
    NotFoundComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(),
    RouterModule.forRoot([
      {path:'home', component:HomeComponent},
      {path:'about', component:AboutComponent},
      {path:'', redirectTo:'home', pathMatch:'full'},
      {path:'create', component:BlogCreateComponent},
      {path:'blog/:blogId', component:BlogViewComponent},
      {path:'edit/:blogId', component:BlogEditComponent},
      {path:'**', component:NotFoundComponent}
    ])
  ],
  providers: [
    BlogService,
    BlogHttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
