import { Component } from '@angular/core'
import { BlogComponent } from './blog.component'

@Component({
  selector: 'app-main',
  imports: [BlogComponent],
  template: `
    <div class="main-content">
      <app-blog title="Morning" detail="Morning My Friends"></app-blog>
    </div>
  `,
  styles: `
    .main-content {
      flex: 1;
      padding: 16px 24px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
    }
  `,
})
export class MainComponent {}
