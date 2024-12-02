import { NgModule } from '@angular/core';
import { 
  MatCardModule, 
  MatButtonModule, 
  MatInputModule, 
  MatPaginatorModule,
  MatSnackBarModule 
} from '@angular/material/';

@NgModule({
  exports: [
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatPaginatorModule,
    MatSnackBarModule
  ]
})
export class MaterialModule { }