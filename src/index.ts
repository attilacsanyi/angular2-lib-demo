import { NgModule } from '@angular/core';

import { FeatureAModule } from './feature-a/feature-a.module';

@NgModule({
  exports: [
    FeatureAModule
  ]
})
export class ModuleB {
}

export * from './feature-a';
