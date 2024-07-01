import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeatureToggleModule } from 'ngx-feature-toggle';
import { FormsModule } from '@angular/forms';
import { EnableFeatureDirective } from './enable-feature.directive';



@NgModule({
  declarations: [
    AppComponent,
    EnableFeatureDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FeatureToggleModule,
    FormsModule      
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
