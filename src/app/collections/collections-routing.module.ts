import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionsHomeComponent } from './collections-home/collections-home.component';
import { BiographyComponent } from './biography/biography.component';
import { CompaniesComponent } from './companies/companies.component';
import { PartnersComponent } from './partners/partners.component';

const routes: Routes = [
  {
    path: '', // Route: collections/
    component: CollectionsHomeComponent,
    children: [
      { path: '', component: BiographyComponent }, // Route: collections/
      { path: 'companies', component: CompaniesComponent }, // Route: collections/companies
      { path: 'partners', component: PartnersComponent }, // Route: collections/partners
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CollectionsRoutingModule {}
