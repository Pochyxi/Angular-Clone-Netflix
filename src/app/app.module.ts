import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainPageComponent } from './main-page/main-page.component';
import { FilmCardComponent } from './film-card/film-card.component';
import { MyNavComponent } from './my-nav/my-nav.component';
import { MyFooterComponent } from './my-footer/my-footer.component';

@NgModule({
  declarations: [AppComponent, MainPageComponent, FilmCardComponent, MyNavComponent, MyFooterComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
