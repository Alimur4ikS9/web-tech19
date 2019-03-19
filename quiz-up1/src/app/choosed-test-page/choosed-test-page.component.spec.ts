import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosedTestPageComponent } from './choosed-test-page.component';

describe('ChoosedTestPageComponent', () => {
  let component: ChoosedTestPageComponent;
  let fixture: ComponentFixture<ChoosedTestPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoosedTestPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoosedTestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
