import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent  } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { OrderConfirmComponent } from './order-confirm/order-confirm.component';
import { RegisterComponent } from './register/register.component';
// import { AppComponent } from './app.component';

@NgModule({
  declarations: [
   HomeComponent,
   HeaderComponent,
   FooterComponent,
   DetailProductComponent,
   LoginComponent,
   OrderComponent,
   OrderConfirmComponent,
   RegisterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [
    HomeComponent
    // HeaderComponent
    // FooterComponent
    // DetailProductComponent
    // LoginComponent
    // OrderComponent
    // OrderConfirmComponent
    // RegisterComponent
  ]
})
export class AppModule { }
