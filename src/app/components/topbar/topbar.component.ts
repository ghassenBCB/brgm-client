import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ProgressBarModule } from 'primeng/progressbar';
import { Calendar, CalendarModule } from 'primeng/calendar';
// import { LayoutService } from '../../services/app.layout.service';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
// import { ExportComponent } from '../export/export.component';
 import { ConfirmDialogModule } from 'primeng/confirmdialog';
import {CommonModule} from "@angular/common";
import {CommentComponent} from "../../modals/comment/comment.component";
import { ExportComponent } from '../../modals/export/export.component';
import { CreateUtimatumComponent } from '../../modals/create-utimatum/create-utimatum.component';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-topbar',
   templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css'
})
export class TopbarComponent implements OnInit {
  items!: MenuItem[];
  formGroup!: FormGroup ;
  date!: FormControl;
  @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;
  ref: DynamicDialogRef | undefined;
  currentDate: string;
  showCalendar: boolean = false;
  selectedDate: Date=new Date();

  /**************************** */
  @ViewChild(Calendar) calendar!: Calendar; // Référence au calendrier
  checkClick: string = "block" ;
  isClicked: boolean = false;
  constructor(public dialogService: DialogService) {
    const date = new Date();
    const monthNames = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    this.currentDate = month + ' ' + year;
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      date: new FormControl()
    });
  }

  updateCurrentDate(event: any) {
    const monthNames = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    const month = monthNames[event.getMonth()];
    const year = event.getFullYear();
    this.currentDate = month + ' ' + year;
    this.showCalendar = false;
    
    this.selectedDate = event; // Met à jour la date sélectionnée
    this.toggleCalendar(); // Ferme le calendrier après avoir sélectionné une date
  }

  exporter() {
      this.ref = this.dialogService.open(ExportComponent, {
          data: {},
      });
  }

  commenter() {
    this.ref = this.dialogService.open(CommentComponent, {
      data: {
        currentDate: this.currentDate
      },
    });
  }

/************************* */

  toggleCalendar() {
    this.showCalendar = !this.showCalendar; // Inverse la valeur pour afficher ou masquer le calendrier
    if (this.showCalendar) {
      // Ouvre le calendrier
      this.calendar.showOverlay();
    } else {
      // Ferme le calendrier
      this.calendar.hideOverlay();
    }
  }


  createUltimatum(){
    
    this.ref = this.dialogService.open(CreateUtimatumComponent, {
      // data: {
      //   currentDate: this.currentDate
      // },
    });
  }
  

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const clickedElement = event.target as HTMLElement;
    const createUltimatum = document.getElementById('createUltimatum');
    const Exporter = document.getElementById('Exporter');
    const Commentaire = document.getElementById('Commentaire');
    const topBarElement = document.getElementById('top-bar');

    if (topBarElement.contains(clickedElement) && 
        !createUltimatum.contains(clickedElement) && 
        !Exporter.contains(clickedElement) &&
        !Commentaire.contains(clickedElement)) {
      // Le clic s'est produit dans la top bar mais pas sur les éléments internes
      // Votre logique de gestion ici

      // Inverser la valeur de isClicked
      this.isClicked = !this.isClicked;

      // Modifier la valeur de checkClick en fonction de l'état actuel de isClicked
      this.checkClick = this.isClicked ? 'none' : 'block';
    }
  }
  
  
 
}
