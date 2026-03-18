import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogService } from './app/services/blog.service';
import { Blog } from './app/models/blog.interface';
import { HeaderComponent } from './app/components/header/header.component';
import { BlogComponent } from './app/components/blog/blog.component';
import { BlogListComponent } from './app/components/blog-list/blog-list.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, HeaderComponent, BlogComponent, BlogListComponent],
  template: `
    <app-header></app-header>
    <main class="main">
      <div class="content">
        <div class="sidebar">
          <app-blog-list
            [blogs]="blogs"
            (blogSelected)="onBlogSelected($event)"
          ></app-blog-list>
        </div>
        <div class="detail">
          <app-blog [blog]="selectedBlog"></app-blog>
        </div>
      </div>
    </main>
  `,
  styles: `
    :host {
      display: block;
    }
    .main {
      padding: 0;
    }
    .content {
      display: flex;
    }
    .sidebar {
      width: 250px;
      border-right: 1px solid #ddd;
      min-height: calc(100vh - 60px);
    }
    .detail {
      flex: 1;
    }
  `,
})
export class AppComponent {
  title = 'angular';
  blogs: Blog[];
  selectedBlog: Blog | null = null;

  constructor(private blogService: BlogService) {
    this.blogs = this.blogService.getBlogs();
    if (this.blogs.length > 0) {
      this.selectedBlog = this.blogs[0];
    }
  }

  onBlogSelected(blog: Blog): void {
    this.selectedBlog = blog;
  }
}
