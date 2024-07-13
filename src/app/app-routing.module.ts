import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { ProductsComponent } from './Components/products/products.component';
import { ContactComponent } from './Components/contact/contact.component';
// import { RegisterDealerComponent } from './Components/register-dealer/register-dealer.component';
// import { RegisterWarrantyComponent } from './Components/register-warranty/register-warranty.component';
import { DealerDashboardComponent } from './Components/dealer-dashboard/dealer-dashboard.component';
import { AdminDashboardComponent } from './Components/admin-dashboard/admin-dashboard.component';
import { MainComponent } from './Components/main/main.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'contact-us', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  // { path: 'register-dealer', component: RegisterDealerComponent },
  // { path: 'register-warranty', component: RegisterWarrantyComponent },
  { path: 'dashboard', component: DealerDashboardComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'main', component: MainComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
