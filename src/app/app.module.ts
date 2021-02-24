import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FsectionComponent } from './fsection/fsection.component';
import { SsectionComponent } from './ssection/ssection.component';
import { TsectionComponent } from './tsection/tsection.component';
import { MainsecComponent } from './mainsec/mainsec.component';
import { TopsecComponent } from './topsec/topsec.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FsectionComponent,
    SsectionComponent,
    TsectionComponent,
    MainsecComponent,
    TopsecComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
