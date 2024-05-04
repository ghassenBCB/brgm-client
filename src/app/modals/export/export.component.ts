import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';


@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrl: './export.component.css'
})
export class ExportComponent {

  visible: boolean = false;
 
  userForm!:FormGroup

  constructor(private fb: FormBuilder,       
     private ref: DynamicDialogRef,
    private config: DynamicDialogConfig,) { 
   
        this.userForm = this.fb.group({
        firstName: ['', Validators.required], 
        lastName: [''],
        address: this.fb.group({ // <- another group of element
          street: [''],
          postCode: ['', Validators.required]
        })
      });
    }
 
    hide() {
       this.ref?.close()
 
      }
      deleteItem( ) {
      throw new Error('Method not implemented.');
      }
  addUser() {
    console.log(this.userForm.value);
  }
}
