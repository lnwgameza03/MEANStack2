import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from "@angular/router";

import { AuthguardGuard } from './authguard.guard'
import { AuthguardGuard2 } from './authguard2.guard'
import { LoginService } from "./services/login.service";

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CategoryComponent } from './components/category/category.component';
import { PostComponent } from './components/post/post.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegisterComponent } from './components/register/register.component';
import { HttpClientModule } from '@angular/common/http';

const appRoutes:Routes = [
  {path: '',component: HomeComponent},
  {path: 'category',component: CategoryComponent},
  {path: 'post',canActivate: [AuthguardGuard],component: PostComponent},
  {path: 'login',canActivate: [AuthguardGuard2],component: LoginComponent},
  {path: 'register',canActivate: [AuthguardGuard2],component: RegisterComponent}
]
  
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    CategoryComponent,
    PostComponent,
    FooterComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [
    AuthguardGuard,
    AuthguardGuard2,
    LoginService
  ],
  bootstrap: [AppComponent],
})

export class AppModule { }