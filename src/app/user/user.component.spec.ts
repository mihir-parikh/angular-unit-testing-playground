import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { UserService } from './user.service';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // A new test
  it('should use the username from service', () => {
    let fixture = TestBed.createComponent(UserComponent);
    let component = fixture.debugElement.componentInstance;
    // Inject the UserService in the component
    let userService = fixture.debugElement.injector.get(UserService);
    /**
     * Trigger any change detection
     * We need to run change detection to update our properties & so on. This automatically happens when the app is running in the browser.
     */    
    fixture.detectChanges();
    expect(userService.user.name).toEqual(component.user.name);
  });
});
