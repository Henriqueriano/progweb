import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { MessageService } from './services/message.service';
import { AuthService } from './services/auth.service';
export const appConfig: ApplicationConfig = {
  providers: 
  [
    provideRouter(routes),
    provideHttpClient(),
    {provide: MessageService},
    {provide: AuthService}
  ]
};

