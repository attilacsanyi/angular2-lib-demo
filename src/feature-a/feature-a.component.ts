import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-feature-a-comp',
  template: `
      <md-toolbar color="primary">
        <md-icon class="demo-toolbar-icon">menu</md-icon>
        <span>Accent Toolbar</span>

        <span class="demo-fill-remaining"></span>

        <md-icon class="demo-toolbar-icon">favorite</md-icon>
        <md-icon class="demo-toolbar-icon">delete</md-icon>
      </md-toolbar>

      <section>
        <button md-button>flat</button>
        <button md-raised-button>raised</button>
        <button md-fab>
          <md-icon class="md-24">check</md-icon>
        </button>
        <button md-mini-fab>
          <md-icon class="md-24">check</md-icon>
        </button>
      </section>
      <h1>
          {{ title }}
      </h1>
  `,
  styles: [`
    .demo-fill-remaining {
        flex: 1 1 auto;
    }
    .demo-toolbar-icon {
      padding: 0 14px;
    }
  `],
  encapsulation: ViewEncapsulation.None
})
export class FeatureAComponent {
  title = 'Feature A works!';
}
