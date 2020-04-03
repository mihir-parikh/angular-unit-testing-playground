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
    // Get an instance of the UserComponent
    component = fixture.componentInstance;
    /**
     * Trigger any change detection
     * We need to run change detection to update our properties & so on. This automatically happens when the app is running in the browser.
     */
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // A new test
  it('should use the username from service', () => {
    // Inject the UserService in the component
    let userService = fixture.debugElement.injector.get(UserService);
    expect(userService.user.name).toEqual(component.user.name);
  });

  // A new test
  it('should print the username if the user is logged in', () => {
    // Get the compiled template/html
    let compiledTemplate = fixture.debugElement.nativeElement;
    component.isLoggedIn = true;
    // Update the component in the test environment
    fixture.detectChanges();
    expect(compiledTemplate.querySelector('p').textContent).toContain(component.user.name);
  }); 

  // A new test
  it('should not print the username if the user is not logged in', () => {
    // Get the compiled template/html
    let compiledTemplate = fixture.debugElement.nativeElement;
    expect(compiledTemplate.querySelector('p').textContent).not.toContain(component.user.name);
  });
});
