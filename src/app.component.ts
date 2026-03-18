import { Component, Input, Output, EventEmitter } from '@angular/core'
import { NgFor, NgIf } from '@angular/common'

export interface Blog {
  title: string
  detail: string
}

const BLOGS: Blog[] = [
  { title: 'Morning', detail: 'Morning My Friends' },
  { title: 'Travel', detail: 'I love traveling!' },
]

@Component({
  selector: 'app-header',
  standalone: true,
  template: `<header class="header"><h1>Hello Blog</h1></header>`,
  styles: `
    .header {
      background-color: #333;
      color: white;
      padding: 16px;
      text-align: center;
    }
    h1 { margin: 0; }
  `,
})
export class HeaderComponent {}

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [NgIf],
  template: `
    <div class="blog" *ngIf="blog">
      <h2 class="blog-title">{{ blog.title }}</h2>
      <p class="blog-detail">{{ blog.detail }}</p>
    </div>
  `,
  styles: `
    .blog { padding: 16px; }
    .blog-title { margin-top: 0; }
  `,
})
export class BlogComponent {
  @Input() blog: Blog | null = null
}

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [NgFor],
  template: `
    <div class="blog-list">
      <div
        class="list-item"
        *ngFor="let item of blogs"
        (click)="selectBlog(item)"
      >
        {{ item.title }}
      </div>
    </div>
  `,
  styles: `
    .blog-list { padding: 16px; }
    .list-item {
      padding: 8px 12px;
      cursor: pointer;
      border-bottom: 1px solid #eee;
    }
    .list-item:hover { background-color: #f0f0f0; }
  `,
})
export class BlogListComponent {
  @Input() blogs: Blog[] = []
  @Output() blogSelected = new EventEmitter<Blog>()

  selectBlog(blog: Blog): void {
    this.blogSelected.emit(blog)
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, BlogComponent, BlogListComponent],
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
    :host { display: block; }
    .main { padding: 0; }
    .content { display: flex; }
    .sidebar {
      width: 250px;
      border-right: 1px solid #ddd;
      min-height: calc(100vh - 60px);
    }
    .detail { flex: 1; }
  `,
})
export class AppComponent {
  title = 'angular'
  blogs: Blog[] = BLOGS
  selectedBlog: Blog | null = BLOGS[0]

  onBlogSelected(blog: Blog): void {
    this.selectedBlog = blog
  }
}
