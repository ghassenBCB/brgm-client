import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';


@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrl: './maps.component.css'
})
export class MapsComponent {

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
