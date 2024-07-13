import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NavbarComponent } from './Components/navbar/navbar.component';
import { AboutComponent } from './Components/about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { LoginComponent } from './Components/login/login.component';
import { HomeComponent } from './Components/home/home.component';
import { FooterComponent } from './Components/footer/footer.component';
import { RegisterWarrantyComponent } from './Components/register-warranty/register-warranty.component';
import { RegisterDealerComponent } from './Components/register-dealer/register-dealer.component';
import { ProductsComponent } from './Components/products/products.component';
import { ContactComponent } from './Components/contact/contact.component';
import { AdminDashboardComponent } from './Components/admin-dashboard/admin-dashboard.component';
import { CheckWarrantyComponent } from './Components/check-warranty/check-warranty.component';
import { GetDealerComponent } from './Components/get-dealer/get-dealer.component';
import { UpdateDealerComponent } from './Components/update-dealer/update-dealer.component';
import { DealerDashboardComponent } from './Components/dealer-dashboard/dealer-dashboard.component';
import { SearchDealerCarsComponent } from './Components/search-dealer-cars/search-dealer-cars.component';
import { MainComponent } from './Components/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    LoginComponent,
    HomeComponent,
    FooterComponent,
    RegisterWarrantyComponent,
    RegisterDealerComponent,
    ProductsComponent,
    ContactComponent,
    AdminDashboardComponent,
    CheckWarrantyComponent,
    GetDealerComponent,
    UpdateDealerComponent,
    DealerDashboardComponent,
    SearchDealerCarsComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
