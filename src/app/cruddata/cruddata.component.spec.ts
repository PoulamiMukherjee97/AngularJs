import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CruddataComponent } from './cruddata.component';

describe('CruddataComponent', () => {
  let component: CruddataComponent;
  let fixture: ComponentFixture<CruddataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CruddataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CruddataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
