import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatSelectModule, MatIconModule, MatDividerModule, MatNativeDateModule, MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
// Import the calendar module
import { NgxEventCalendarModule } from 'ngx-event-calendar';

@NgModule({
  imports:      [ BrowserModule,
                  FormsModule,
                  NgxEventCalendarModule,
                  MatButtonModule,
                  MatSelectModule,
                  MatFormFieldModule,
                  MatInputModule,
                  MatIconModule,
                  MatDividerModule,
                  MatNativeDateModule, 
                  FlexLayoutModule,
                  BrowserAnimationsModule
                   ],
  exports: [
                  MatButtonModule,
                  MatSelectModule,
                  MatFormFieldModule,
                  MatInputModule,
                  MatIconModule,
                  MatDividerModule,
                  MatNativeDateModule
  ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }