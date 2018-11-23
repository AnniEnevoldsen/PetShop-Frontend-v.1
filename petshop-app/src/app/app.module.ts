import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PetlistComponent } from './pets/pet-list/petlist.component';
import { PetDetailsComponent } from './pets/pet-details/pet-details.component';
import { PetCreateComponent } from './pets/pet-create/pet-create.component';
import { PetUpdateComponent } from './pets/pet-update/pet-update.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/services/auth.guard';
import {AuthenticationService} from "./shared/services/authentication.service";
import {PetServiceService} from "./shared/services/pet-service.service";
import {BrowserAnimationBuilder} from "@angular/platform-browser/animations/src/animation_builder";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule, MatMenuModule, MatPaginatorModule, MatProgressSpinnerModule, MatSelectModule, MatToolbarModule
} from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WelcomeComponent,
    PetlistComponent,
    PetDetailsComponent,
    PetCreateComponent,
    PetUpdateComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatToolbarModule,
    MatSelectModule,
    MatMenuModule,
    MatPaginatorModule
    //LoginComponent
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    PetServiceService //not sure if this should be here
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
