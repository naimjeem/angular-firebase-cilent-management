import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// AngularFire2
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientsComponent } from './components/clients/clients.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
// Services
import { ClientService } from './services/client.service';

const appRoutes: Routes = [
  { path: '',               component: DashboardComponent },
  { path: 'register',       component: RegisterComponent  },
  { path: 'login',          component: LoginComponent     },
  { path: 'add-client',     component: AddClientComponent }
];

export const firebaseConfig = {
  apiKey: "*************",
  authDomain: "**************",
  databaseURL: "*************",
  storageBucket: "*********",
  messagingSenderId: "********"
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    ClientsComponent,
    AddClientComponent,
    EditClientComponent,
    ClientDetailsComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [
    AngularFireAuth,
    AngularFireDatabase,
    ClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
