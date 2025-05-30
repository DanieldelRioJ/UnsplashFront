import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageMetadataComponent } from './image-metadata.component';

describe('ImageMetadataComponent', () => {
  let component: ImageMetadataComponent;
  let fixture: ComponentFixture<ImageMetadataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageMetadataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageMetadataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
