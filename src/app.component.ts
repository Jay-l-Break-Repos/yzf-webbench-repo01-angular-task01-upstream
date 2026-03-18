import { Component } from '@angular/core';
import { BlogService } from './app/services/blog.service';
import { Blog } from './app/models/blog.interface';

@Component({
  selector: 'app-root',
  imports: [],
  template: `
    <main class="main">
      <h1>Blog Application</h1>
    </main>
  `,
  styles: `
    body {
      margin: 0;
      padding: 0;
    }
  `,
})
export class AppComponent {
  title = 'angular';
  blogs: Blog[];

  constructor(private blogService: BlogService) {
    this.blogs = this.blogService.getBlogs();
  }
}
