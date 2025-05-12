import { ApplicationConfig } from '@angular/core';
import { provideRouter, Router } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { MessageService } from './services/message.service';
import { AuthService } from './services/auth.service';
import { CookieService } from 'ngx-cookie-service';
export const appConfig: ApplicationConfig = {
  providers: 
  [
    provideRouter(routes),
    provideHttpClient(),
    {provide: MessageService},
    {provide: AuthService},
    {provide: Router}
  ]
};

