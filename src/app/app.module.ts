import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
