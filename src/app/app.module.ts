import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { COneComponent } from './c-one/c-one.component';
import { CTwoComponent } from './c-two/c-two.component';
import { CThreeComponent } from './c-three/c-three.component';
import { CFourComponent } from './c-four/c-four.component';
import { CFiveComponent } from './c-five/c-five.component';
import { CSixComponent } from './c-six/c-six.component';
import { CSevenComponent } from './c-seven/c-seven.component';
import { CEightComponent } from './c-eight/c-eight.component';
import { CNineComponent } from './c-nine/c-nine.component';
import { CTenComponent } from './c-ten/c-ten.component';

@NgModule({
  declarations: [
    AppComponent,
    COneComponent,
    CTwoComponent,
    CThreeComponent,
    CFourComponent,
    CFiveComponent,
    CSixComponent,
    CSevenComponent,
    CEightComponent,
    CNineComponent,
    CTenComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
