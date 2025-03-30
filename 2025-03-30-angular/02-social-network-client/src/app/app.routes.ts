import { Routes } from '@angular/router';
import { ProfileComponent } from './components/posts/profile/profile.component';
import { FeedComponent } from './components/posts/feed/feed.component';
import { NotFoundComponent } from './components/layout/not-found/not-found.component';

export const routes: Routes = [
    { path: 'profile', component: ProfileComponent },
    { path: '', redirectTo: 'profile', pathMatch: 'full'},
    { path: 'feed', component: FeedComponent },
    { path: '**', component: NotFoundComponent }
];
