import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SentMessagesComponent } from './components/sent-messages/sent-messages.component';
import { AuthGuard } from '../app/services/auth.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ComposeMessagesComponent } from './components/compose-messages/compose-messages.component';
import { InboxMessagesComponent } from './components/inbox-messages/inbox-messages.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'sent', pathMatch: 'full'},
      {
        path: 'sent',
        component: SentMessagesComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'inbox',
        component: InboxMessagesComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'compose',
        component: ComposeMessagesComponent,
        canActivate: [AuthGuard]
      }
    ]
  },
  { path: '**', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}
