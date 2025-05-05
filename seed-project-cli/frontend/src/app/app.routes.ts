import { Routes } from '@angular/router';
import { MessageComponent } from './message/message.component';
import { AuthenticationComponent } from './auth/authentication.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { AUTH_ROUTES } from './auth/auth.routers';
export const routes: Routes = [
  { path:'',redirectTo: '/autenticacao', pathMatch: 'full'},
  { path: 'mensagens', 'title':'Mensagens', component: MessageComponent},
  { path: 'autenticacao', 'title': 'Autenticação', component: AuthenticationComponent,
  children: AUTH_ROUTES },
  { path: '**', component: PageNotFoundComponent }
];

