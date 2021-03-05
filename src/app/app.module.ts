
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppService } from './app.service';
import { ApiService } from './api.service';
// import { SimpleNotificationsModule } from 'angular2-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    // SimpleNotificationsModule.forRoot(),
  ],
  providers: [AppService,ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
