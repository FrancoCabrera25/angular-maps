import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullScreeenPageComponent } from './full-screeen-page.component';

describe('FullScreeenPageComponent', () => {
  let component: FullScreeenPageComponent;
  let fixture: ComponentFixture<FullScreeenPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FullScreeenPageComponent]
    });
    fixture = TestBed.createComponent(FullScreeenPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
