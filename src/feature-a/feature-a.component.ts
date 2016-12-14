import { Component } from '@angular/core';

@Component({
  selector: 'app-feature-a-comp',
  template: `<h1>{{ title }}</h1>`,
})
export class FeatureAComponent {
  title = 'Feature A works!';
}
