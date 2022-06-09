import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ImgcomponentComponent } from './imgcomponent/imgcomponent.component';
import { TestComponent } from './test/test.component';
import { ChildComponent } from './child/child.component';
import { ChildPipe } from './child/child.pipe';
import { Child2Component } from './child2/child2.component';
import { NgchookComponent } from './ngchook/ngchook.component';
import { Comp1Component } from './comp1/comp1.component';
import { DataServiceService } from './services/data-service.service';
import {HttpClientModule} from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { DealCalcComponent } from './deal-calc/deal-calc.component';
import { AriannaComponent } from './arianna/arianna.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component'


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ImgcomponentComponent,
    TestComponent,
    ChildComponent,
    ChildPipe,
    Child2Component,
    NgchookComponent,
    Comp1Component,
    AboutComponent,
    DealCalcComponent,
    AriannaComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
