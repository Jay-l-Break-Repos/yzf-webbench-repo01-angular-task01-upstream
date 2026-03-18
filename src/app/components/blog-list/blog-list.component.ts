import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Blog } from '../../models/blog.interface';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="blog-list">
      <div
        class="list-item"
        *ngFor="let blog of blogs"
        (click)="selectBlog(blog)"
      >
        {{ blog.title }}
      </div>
    </div>
  `,
  styles: `
    .blog-list {
      padding: 16px;
    }
    .list-item {
      padding: 8px 12px;
      cursor: pointer;
      border-bottom: 1px solid #eee;
    }
    .list-item:hover {
      background-color: #f0f0f0;
    }
  `,
})
export class BlogListComponent {
  @Input() blogs: Blog[] = [];
  @Output() blogSelected = new EventEmitter<Blog>();

  selectBlog(blog: Blog): void {
    this.blogSelected.emit(blog);
  }
}
