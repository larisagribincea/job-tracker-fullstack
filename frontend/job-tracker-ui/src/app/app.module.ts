import { NgModule, isDevMode } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MatCardModule } from "@angular/material/card";
import { MatTableModule } from "@angular/material/table";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { JobListComponent } from "./job-list/job-list.component";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { JobEffects } from "./store/job.effects";
import { StoreModule } from "@ngrx/store";
import { jobsReducer } from "./store/job.reducer";
import { HttpClientModule } from "@angular/common/http";
import { MatButtonModule } from "@angular/material/button";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { FormsModule } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations: [AppComponent, JobListComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatButtonModule,
    AppRoutingModule,
    NoopAnimationsModule,
    StoreModule.forRoot({ jobsState: jobsReducer }),
    EffectsModule.forRoot([JobEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
