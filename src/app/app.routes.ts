import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { TaulerComponent } from './components/tauler/tauler.component';

export const routes: Routes = [
    { path: '', redirectTo: 'acces', pathMatch: 'full' },
    { path: 'acces', component: LoginComponent },
    {path: 'tauler', component: TaulerComponent },
    { path: '**', redirectTo: 'acces', pathMatch: 'full' }];
