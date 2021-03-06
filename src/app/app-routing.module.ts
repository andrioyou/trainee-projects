import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth/guards/auth.guard';

import { HomePageComponent } from './shared/components/home-page/home-page.component';
import { LogInComponent } from './auth/container/log-in/log-in.component';
import { SignUpComponent } from './auth/container/sign-up/sign-up.component';
import { AuthNgxsComponent } from './auth-ngxs/container/auth-ngxs/auth-ngxs.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'memory-game',
    loadChildren: () => import('./views/memory-game/memory-game.module').then(mod => mod.MemoryGameModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'selects',
    loadChildren: () => import('./views/selects/selects.module').then(mod => mod.SelectsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'guess-picture-name',
    loadChildren: () =>
      import('./views/guess-picture-name/guess-picture-name.module').then(mod => mod.GuessPictureNameModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'elements',
    loadChildren: () => import('./views/elements/elements.module').then(mod => mod.ElementsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'todo',
    loadChildren: () => import('./views/todo/todo.module').then(mod => mod.TodoModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'my-account',
    loadChildren: () => import('./views/my-account/my-account.module').then(mod => mod.MyAccountModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'form-creator',
    loadChildren: () => import('./views/form-creator/form-creator.module').then(mod => mod.FormCreatorModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'posts',
    loadChildren: () => import('./views/posts/posts.module').then(mod => mod.PostsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'stream-edit',
    loadChildren: () => import('./views/stream-edit/stream-edit.module').then(mod => mod.StreamEditModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'table',
    loadChildren: () => import('./views/table/table.module').then(mod => mod.TableModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'auth-ngxs',
    component: AuthNgxsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'log-in',
    component: LogInComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
