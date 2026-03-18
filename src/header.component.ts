import { Component } from '@angular/core'

@Component({
  selector: 'app-header',
  imports: [],
  template: `
    <header class="header">
      <h1>Hello Blog</h1>
    </header>
  `,
  styles: `
    .header {
      background-color: #4a90d9;
      color: #ffffff;
      padding: 16px 24px;
      margin: 0;
    }
    .header h1 {
      margin: 0;
    }
  `,
})
export class HeaderComponent {}
