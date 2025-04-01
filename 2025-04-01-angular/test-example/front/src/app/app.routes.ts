import { Routes } from '@angular/router';
import { ProfileComponent } from './components/posts/profile/profile.component';
import { FeedComponent } from './components/posts/feed/feed.component';
import { NotFoundComponent } from './components/layout/not-found/not-found.component';
import { EditComponent } from './components/posts/edit/edit.component';
import { ListComponent } from './components/furnitures/list/list.component';
import { NewComponent } from './components/furnitures/new/new.component';

export const routes: Routes = [
    { path: '', component: ListComponent },
    { path: 'new', component: NewComponent },
    { path: '**', component: NotFoundComponent }
];
