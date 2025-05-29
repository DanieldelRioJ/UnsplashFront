import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonImageLoadingComponent } from './skeleton-image-loading.component';

describe('SkeletonImageLoadingComponent', () => {
  let component: SkeletonImageLoadingComponent;
  let fixture: ComponentFixture<SkeletonImageLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkeletonImageLoadingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkeletonImageLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
