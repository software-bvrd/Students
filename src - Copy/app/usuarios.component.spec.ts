import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { usuarios } from './usuarios.component';

describe('usuarios', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        usuarios
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(usuarios);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'apiusuarios'`, () => {
    const fixture = TestBed.createComponent(usuarios);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('apiusuarios');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(usuarios);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('apiusuarios app is running!');
  });
});
