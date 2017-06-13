import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiUserRegistrationComponent } from './ri-user-registration.component';

describe('RiUserRegistrationComponent', () => {
  let component: RiUserRegistrationComponent;
  let fixture: ComponentFixture<RiUserRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiUserRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiUserRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
