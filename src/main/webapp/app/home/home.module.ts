import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProjetDgticSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';


//import { ProjetDgticSharedModule } from 'app/shared/shared.module';
import { EntrepriseComponent } from 'app/entities/entreprise/entreprise.component';
import { EntrepriseDetailComponent } from 'app/entities/entreprise/entreprise-detail.component';
import { EntrepriseUpdateComponent } from 'app/entities/entreprise/entreprise-update.component';
import { EntrepriseDeleteDialogComponent } from 'app/entities/entreprise/entreprise-delete-dialog.component';
import { entrepriseRoute } from 'app/entities/entreprise/entreprise.route';

@NgModule({
  imports: [ProjetDgticSharedModule, RouterModule.forChild([HOME_ROUTE]),RouterModule.forChild(entrepriseRoute)],
  declarations: [HomeComponent,
    EntrepriseComponent, EntrepriseDetailComponent, EntrepriseUpdateComponent, EntrepriseDeleteDialogComponent],
})
export class ProjetDgticHomeModule {}







/*@NgModule({
  imports: [ProjetDgticSharedModule, RouterModule.forChild(entrepriseRoute)],
  declarations: [EntrepriseComponent, EntrepriseDetailComponent, EntrepriseUpdateComponent, EntrepriseDeleteDialogComponent],
  entryComponents: [EntrepriseDeleteDialogComponent],
})*/