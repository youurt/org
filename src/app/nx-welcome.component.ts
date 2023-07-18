import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'org-nx-welcome',
  standalone: true,
  imports: [CommonModule],
  template: ` <div>app runs</div> `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {}
