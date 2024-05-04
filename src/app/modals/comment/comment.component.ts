import { Component, Inject } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css'
})
export class CommentComponent {

  currentDate: string;

  constructor(private ref: DynamicDialogRef, @Inject(DynamicDialogConfig) private config: any) {
    this.currentDate = this.config.data.currentDate;
  }

  BasicShow: boolean = false;

  showDialog() {
    this.BasicShow = true;
  }

  hide() {
    this.ref?.close()

  }
}
