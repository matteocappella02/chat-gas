import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./views/chat/chat.component').then(cmp => cmp.ChatComponent) },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: ''
    }
];
