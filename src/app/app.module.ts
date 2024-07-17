import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NavbarComponent } from './Components/navbar/navbar.component';
import { AboutComponent } from './Components/about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './Components/login/login.component';
import { HomeComponent } from './Components/home/home.component';
import { FooterComponent } from './Components/footer/footer.component';
import { RegisterWarrantyComponent } from './Components/register-warranty/register-warranty.component';
import { RegisterDealerComponent } from './Components/register-dealer/register-dealer.component';
import { ProductsComponent } from './Components/products/products.component';
import { ContactComponent } from './Components/contact/contact.component';
import { CheckWarrantyComponent } from './Components/check-warranty/check-warranty.component';
import { GetDealerComponent } from './Components/get-dealer/get-dealer.component';
import { UpdateDealerComponent } from './Components/update-dealer/update-dealer.component';
import { SearchDealerCarsComponent } from './Components/search-dealer-cars/search-dealer-cars.component';
import { MainComponent } from './Components/main/main.component';
import { WarrantyCardComponent } from './Components/warranty-card/warranty-card.component';
import { SearchAllCarsComponent } from './Components/search-all-cars/search-all-cars.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { DealerInfoComponent } from './Components/dealer-info/dealer-info.component';

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
    CheckWarrantyComponent,
    GetDealerComponent,
    UpdateDealerComponent,
    SearchDealerCarsComponent,
    MainComponent,
    WarrantyCardComponent,
    SearchAllCarsComponent,
    DashboardComponent,
    DealerInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
