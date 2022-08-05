import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/layout/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from './core/layout/layout.module';
import { CooperateAdmissionModule } from './pages/cooperate-admission/cooperate-admission.module';
import { HttpClientModule } from '@angular/common/http';
import { NgDynamicBreadcrumbModule } from 'ng-dynamic-breadcrumb';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    CooperateAdmissionModule,
    NgDynamicBreadcrumbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
