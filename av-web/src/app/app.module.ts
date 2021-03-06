import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogRegComponent } from './log-reg/log-reg.component';
import {FormsModule} from '@angular/forms'
import { ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import{ MatSnackBarModule} from '@angular/material/snack-bar'
import { MatListModule } from '@angular/material/list';
import { AuthenticationService } from './service/authentication.service';
import { DatabaseService } from './service/database.service';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TakeAttendanceComponent } from './take-attendance/take-attendance.component';
import { ModifyAttendanceComponent } from './modify-attendance/modify-attendance.component';
import { CheckAttendanceTComponent } from './check-attendance-t/check-attendance-t.component';
import { CheckAttendanceSComponent } from './check-attendance-s/check-attendance-s.component';
import { NotVerifiedComponent } from './not-verified/not-verified.component';

@NgModule({
  declarations: [
    AppComponent,
    LogRegComponent,
    DashboardComponent,
    ProfileComponent,
    HomeComponent,
    ForbiddenComponent,
    PageNotFoundComponent,
    TakeAttendanceComponent,
    ModifyAttendanceComponent,
    CheckAttendanceTComponent,
    CheckAttendanceSComponent,
    NotVerifiedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatSnackBarModule,
  ],
  providers: [AuthenticationService,DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
