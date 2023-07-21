import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {routing} from './app-routing';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {MainPageComponent} from './pages/main-page/main-page/main-page.component';
import {LoginPageComponent} from './pages/login-page/login-page/login-page.component';
import {RegistrationPageComponent} from './pages/registration-page/registration-page/registration-page.component';
import {CardComponent} from './components/card/card.component';
import {ProfileComponent} from './components/profile/profile.component';
import {CardsComponent} from './components/cards/cards.component';
import {AddNewCardPopupComponent} from './components/add-new-card-popup/add-new-card-popup.component';
import {PopupComponent} from "./components/popup/popup.component";
import {FormComponent} from "./components/form/form.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainPageComponent,
    LoginPageComponent,
    RegistrationPageComponent,
    CardComponent,
    ProfileComponent,
    CardsComponent,
    AddNewCardPopupComponent,
    PopupComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
