import { Component } from '@angular/core'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
    <header class="header">
      <h1 class="header-title">Hello Blog</h1>
    </header>
  `,
  styles: `
    .header {
      background-color: #4a90d9;
      color: #ffffff;
      padding: 1.25rem 2rem;
      text-align: center;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .header-title {
      margin: 0;
      font-size: 2rem;
      font-weight: 700;
      letter-spacing: 0.5px;
    }
  `,
})
export class HeaderComponent {}
