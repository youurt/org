import { Directive } from '@angular/core';

@Directive({ selector: '[orgTestDirective]', standalone: true })
export class TestDirective {
  constructor() {
    console.log('it works!');
  }
}
