import { Injectable } from '@angular/core';
import { Blog } from '../models/blog.interface';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private blogs: Blog[] = [
    { title: 'Morning', detail: 'Morning My Friends' },
    { title: 'Travel', detail: 'I love traveling!' },
  ];

  getBlogs(): Blog[] {
    return this.blogs;
  }

  addBlog(blog: Blog): void {
    this.blogs.push(blog);
  }
}
