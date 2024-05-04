import { Component, Inject, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { UltimatumService } from '../../services/ultimatum.service';
import { ultimatum } from '../../interfaces/ultimatum';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-create-utimatum',
  templateUrl: './create-utimatum.component.html',
  styleUrl: './create-utimatum.component.css'
})

  
export class CreateUtimatumComponent implements OnInit {
  ultimatumForm!: FormGroup;

  
  constructor(private messageService:MessageService,
              private ultimatumService:UltimatumService , 
              private ref: DynamicDialogRef, 
              @Inject(DynamicDialogConfig) private config: any,
              private fb: FormBuilder) {
    // this.currentDate = this.config.data.currentDate;
  }

  ngOnInit() {
    // currentDate: string;
  this.ultimatumForm = this.fb.group({
    periodName: ['', Validators.required], 
    startPeriod:  [null, Validators.required], 
    endPeriod:  [null, Validators.required], 
    isActivated: [false]
  });
  }

  get periodName() {
    return this.ultimatumForm.controls['periodName'];
  }

  get startPeriod() {
    return this.ultimatumForm.controls['startPeriod'];
  }

  get endPeriod() {
    return this.ultimatumForm.controls['endPeriod'];
  }

  get isActivated() {
    return this.ultimatumForm.controls['isActivated'];
  }

  BasicShow: boolean = false;

  showDialog() {
    this.BasicShow = true;
  }

  hide() {
    this.ref?.close()

  }

cancelUltimatum(){
  this.hide();
}

  addUltimatum() {
    console.log(JSON.stringify(this.ultimatumForm.value));
   
    if (this.ultimatumForm) {
      // Access form control values and create an object of type Ultimatum
      const ultimatumData: ultimatum = {
        libelle: this.ultimatumForm.get('periodName').value,
        startPeriod: this.ultimatumForm.get('startPeriod').value,
        endPeriod: this.ultimatumForm.get('endPeriod').value,
        actif: this.ultimatumForm.get('isActivated').value,
        //comment: this.ultimatumForm.get('comment').value,
        
      }; 
      this.ultimatumService.addUltimatum(ultimatumData).subscribe(
        (response: any) => {
          console.log("resp == ", response);
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Ultimatum crée avec succès !' });
          this.hide();
        }
        ,
      error => {
        console.error("Une erreur s'est produite:", error);
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Probleme de création ' });
      }
       
         
      );
      
    }

    
    

   
  }
}
