import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { FeatureAComponent } from './feature-a.component';

@NgModule({
  imports: [CommonModule],
  declarations: [FeatureAComponent],
  exports: [FeatureAComponent]
})
export class FeatureAModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: FeatureAModule,
      providers: []
    };
  }
}
