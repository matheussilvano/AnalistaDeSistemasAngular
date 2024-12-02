import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';

import { ChampionsListComponent } from './components/champions-list/champions-list.component';
import { ChampionDetailComponent } from './components/champion-detail/champion-detail.component';
import { SkinPreviewDialogComponent } from './components/skin-preview-dialog/skin-preview-dialog.component';
import { ChampionsRoutingModule } from './champions-routing.module';
import { ChampionsService } from './services/champions.service';

@NgModule({
  declarations: [
    ChampionsListComponent,
    ChampionDetailComponent,
    SkinPreviewDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ChampionsRoutingModule
  ],
  providers: [
    ChampionsService
  ]
})
export class ChampionsModule { }