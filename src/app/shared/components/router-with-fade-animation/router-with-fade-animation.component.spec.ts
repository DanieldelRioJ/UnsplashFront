import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterWithFadeAnimationComponent } from './router-with-fade-animation.component';

describe('RouterWithFadeAnimationComponent', () => {
  let component: RouterWithFadeAnimationComponent;
  let fixture: ComponentFixture<RouterWithFadeAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterWithFadeAnimationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouterWithFadeAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
