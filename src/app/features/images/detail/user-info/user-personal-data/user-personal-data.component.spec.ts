import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPersonalDataComponent } from './user-personal-data.component';

describe('UserPersonalDataComponent', () => {
  let component: UserPersonalDataComponent;
  let fixture: ComponentFixture<UserPersonalDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserPersonalDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserPersonalDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
