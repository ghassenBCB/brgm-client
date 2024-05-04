import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { CapteursComponent } from './components/capteurs/capteurs.component';
import { SecteursComponent } from './components/secteurs/secteurs.component';
import { UtilisateursComponent } from './components/utilisateurs/utilisateurs.component';
import { MapComponent } from './components/home/map/map.component';


import {  FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { DialogModule } from 'primeng/dialog';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ScaleComponent } from './components/home/map/scale/scale.component';


//Serices
import { UltimatumService } from './services/ultimatum.service';
//Modals
import { CommentComponent } from './modals/comment/comment.component'; // Import RouterModule
import { ExportComponent } from './modals/export/export.component';
import { CreateUtimatumComponent } from './modals/create-utimatum/create-utimatum.component';
import { MapsComponent } from './modals/maps/maps.component';
// primeng components
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ProgressBarModule } from 'primeng/progressbar';
import { CalendarModule } from 'primeng/calendar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TabViewModule } from 'primeng/tabview';
import {AvatarModule} from "primeng/avatar";
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ExportComponent,
    AppComponent,
    TopbarComponent,
    SidebarComponent,
    HomeComponent,
    CapteursComponent,
    SecteursComponent,
    UtilisateursComponent,
    MapComponent,
    MapsComponent,
    ScaleComponent,
    CommentComponent,
    CreateUtimatumComponent
  ],

  imports: [TabViewModule,AvatarModule,RouterModule,BrowserAnimationsModule,DialogModule,ConfirmDialogModule,ButtonModule,ProgressBarModule,CalendarModule,ReactiveFormsModule,
    FormsModule,CommonModule,TranslateModule,CardModule,InputTextModule,ToastModule,HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(),
    DialogService,TranslateService,UltimatumService,MessageService,
    DynamicDialogConfig, // Add DynamicDialogConfig to providers
    DynamicDialogRef // Add DynamicDialogRef to providers
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
// function provideClientHydration(): import("@angular/core").Provider | import("@angular/core").EnvironmentProviders {
//   throw new Error('Function not implemented.');
// }

