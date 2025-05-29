import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageAdvancedSearchComponent } from './image-advanced-search.component';

describe('ImageAdvancedSearchComponent', () => {
  let component: ImageAdvancedSearchComponent;
  let fixture: ComponentFixture<ImageAdvancedSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageAdvancedSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageAdvancedSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
