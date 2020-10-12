import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactfunctionsComponent } from './reactfunctions.component';

describe('ReactfunctionsComponent', () => {
  let component: ReactfunctionsComponent;
  let fixture: ComponentFixture<ReactfunctionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactfunctionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactfunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
