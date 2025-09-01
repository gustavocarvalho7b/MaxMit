import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeBarComponent } from './home-bar/home-bar.component';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { HomeComponent } from './home/home.component';
import { ModalComponent } from './modal/modal.component';
import { CardallComponent } from './cardall/cardall.component';
import { HorizontalScrollDirective } from './cardall/horizontal-scroll.directive';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeBarComponent,
    MenuAdminComponent,
    HomeComponent,
    ModalComponent,
    CardallComponent,
    HorizontalScrollDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
