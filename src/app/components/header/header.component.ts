import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header class="header">
      <h1>Hello Blog</h1>
    </header>
  `,
  styles: `
    .header {
      background-color: #333;
      color: white;
      padding: 16px;
      text-align: center;
    }
    h1 {
      margin: 0;
    }
  `,
})
export class HeaderComponent {}
