import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoValidFilterPlaceholderComponent } from './no-valid-filter-placeholder.component';

describe('NoValidFilterPlaceholderComponent', () => {
  let component: NoValidFilterPlaceholderComponent;
  let fixture: ComponentFixture<NoValidFilterPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoValidFilterPlaceholderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoValidFilterPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
