import { TestBed, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService]
    });
  });

  it(
    'should be initialized',
    inject([AuthService], (authService: AuthService) => {
      expect(authService).toBeTruthy();
    })
  );

  it(
    'should perform login correctly',
    inject(
      [AuthService, HttpTestingController],
      (authService: AuthService, backend: HttpTestingController) => {
        authService.onLogin('test@example.com', 'testpassword').subscribe(
          (data: any) => {
            expect(data.success).toBe(true);
            expect(data.message).toBe('login was successful');
          },
          (error: any) => {}
        );

        backend
          .expectOne({
            url: 'https://fzl0pnn3xi.execute-api.us-east-1.amazonaws.com/dev/login'
          })
          .flush({
            success: true,
            message: 'login was successful'
          });
      }
    )
  );

  it(
    'should fail login correctly',
    inject(
      [AuthService, HttpTestingController],
      (authService: AuthService, backend: HttpTestingController) => {
        authService.onLogin('test@example.com', 'wrongPassword').subscribe(
          (data: any) => {
            expect(data.success).toBe(false);
            expect(data.message).toBe('email and password combination is wrong');
          },
          (error: any) => {}
        );

        backend
          .expectOne({
            url: 'https://fzl0pnn3xi.execute-api.us-east-1.amazonaws.com/dev/login'
          })
          .flush({
            success: false,
            message: 'email and password combination is wrong'
          });
      }
    )
  );
});
