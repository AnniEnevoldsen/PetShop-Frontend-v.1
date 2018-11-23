import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {PetlistComponent} from './pets/pet-list/petlist.component';
import {PetDetailsComponent} from './pets/pet-details/pet-details.component';
import {PetCreateComponent} from './pets/pet-create/pet-create.component';
import {PetUpdateComponent} from './pets/pet-update/pet-update.component';
import {LoginComponent} from "./login/login.component";
import { AuthGuard } from './shared/services/auth.guard';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: WelcomeComponent, canActivate: [AuthGuard] },
  {path: 'pets', component: PetlistComponent, canActivate: [AuthGuard]},
  {path: 'pets/:id', component: PetDetailsComponent, canActivate: [AuthGuard]},
  {path: 'pet-add', component: PetCreateComponent, canActivate: [AuthGuard]},
  {path: 'pet-update/:id', component: PetUpdateComponent, canActivate: [AuthGuard]},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})

export class AppRoutingModule { }
