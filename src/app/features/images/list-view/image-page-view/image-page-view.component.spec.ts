import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagePageViewComponent } from './image-page-view.component';

describe('ImagePageViewComponent', () => {
  let component: ImagePageViewComponent;
  let fixture: ComponentFixture<ImagePageViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImagePageViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagePageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
