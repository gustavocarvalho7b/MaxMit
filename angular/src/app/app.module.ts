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

@NgModule({
  declarations: [
    AppComponent,
    HomeBarComponent,
    MenuAdminComponent,
    HomeComponent,
    ModalComponent,
    CardallComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
