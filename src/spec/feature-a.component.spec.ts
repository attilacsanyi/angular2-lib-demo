/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { FeatureAComponent } from '../';

import { ModuleB } from 'module-b';

describe('FeatureAComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ModuleB]
      declarations: [
        FeatureAComponent
      ],
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(FeatureAComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Feature A works!'`, async(() => {
    let fixture = TestBed.createComponent(FeatureAComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Feature A works!');
  }));

  it('should render title in a h1 tag', async(() => {
    let fixture = TestBed.createComponent(FeatureAComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Feature A works!');
  }));
});
