import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { ProductsComponent } from './Components/products/products.component';
import { ContactComponent } from './Components/contact/contact.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { MainComponent } from './Components/main/main.component';
import { WarrantyListComponent } from './Components/warranty-list/warranty-list.component';

import { RegisterDealerComponent } from './Components/register-dealer/register-dealer.component';
import { RegisterWarrantyComponent } from './Components/register-warranty/register-warranty.component';
import { CheckWarrantyComponent } from './Components/check-warranty/check-warranty.component';
import { UpdateDealerComponent } from './Components/update-dealer/update-dealer.component';
import { GetDealerComponent } from './Components/get-dealer/get-dealer.component';
import { SearchDealerCarsComponent } from './Components/search-dealer-cars/search-dealer-cars.component';
import { SearchAllCarsComponent } from './Components/search-all-cars/search-all-cars.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'contact-us', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'main', component: MainComponent },

  { path: 'register-dealer', component: RegisterDealerComponent },
  { path: 'register-warranty', component: RegisterWarrantyComponent },
  { path: 'check-warranty', component: CheckWarrantyComponent },
  { path: 'update-dealer', component: UpdateDealerComponent },
  { path: 'get-dealer', component: GetDealerComponent },
  { path: 'search-dealer-cars', component: SearchDealerCarsComponent },
  { path: 'search-all-cars', component: SearchAllCarsComponent },

  { path: 'all-ppf-cars', component: WarrantyListComponent },
  { path: ':username/ppf-cars', component: WarrantyListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
