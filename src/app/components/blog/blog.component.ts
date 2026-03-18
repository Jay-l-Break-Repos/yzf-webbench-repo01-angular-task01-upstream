import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Blog } from '../../models/blog.interface';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="blog" *ngIf="blog">
      <h2 class="blog-title">{{ blog.title }}</h2>
      <p class="blog-detail">{{ blog.detail }}</p>
    </div>
  `,
  styles: `
    .blog {
      padding: 16px;
    }
    .blog-title {
      margin-top: 0;
    }
  `,
})
export class BlogComponent {
  @Input() blog: Blog | null = null;
}
