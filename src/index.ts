import { NgModule } from '@angular/core';
import { FeatureAModule } from './feature-a';

@NgModule({
  imports: [FeatureAModule],
  exports: [FeatureAModule]
})
export class ModuleB {
}

export * from './feature-a';
