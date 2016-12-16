import { NgModule, ModuleWithProviders } from '@angular/core';
import { SharedModule } from '../shared';
import { FeatureAComponent } from './feature-a.component';

@NgModule({
  imports: [
    SharedModule.forRoot(),
  ],
  declarations: [
    FeatureAComponent
  ],
  exports: [
    FeatureAComponent,
  ]
})
export class FeatureAModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: FeatureAModule,
      providers: []
    };
  }
}
