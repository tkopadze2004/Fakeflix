import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedComponent } from './animated.component';

describe('AnimatedComponent', () => {
  let component: AnimatedComponent;
  let fixture: ComponentFixture<AnimatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimatedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
