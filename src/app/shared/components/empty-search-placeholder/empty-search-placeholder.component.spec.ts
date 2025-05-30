import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptySearchPlaceholderComponent } from './empty-search-placeholder.component';

describe('EmptySearchPlaceholderComponent', () => {
  let component: EmptySearchPlaceholderComponent;
  let fixture: ComponentFixture<EmptySearchPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmptySearchPlaceholderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmptySearchPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
