import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StartAnglrComponent } from './start-anglr/start-anglr.component';
import { ServerComponent } from './server/server.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { NmbrcolorchngComponent } from './nmbrcolorchng/nmbrcolorchng.component';

@NgModule({
  declarations: [
    AppComponent,
    StartAnglrComponent,
    ServerComponent,
    SuccessAlertComponent,
    WarningAlertComponent,
    NmbrcolorchngComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
