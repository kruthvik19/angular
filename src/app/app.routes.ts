import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { compileClassDebugInfo } from '@angular/compiler';
import { Component } from '@angular/core';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UploadComponent } from './pages/upload/upload.component';
import { RankerComponent } from './pages/ranker/ranker.component';
import { ReportComponent } from './pages/report/report.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
{
   path: '',
   redirectTo:'login',
   pathMatch:'full'
},
{
    path:'login',
    component:LoginComponent
},
{
    path:'',
    component:LayoutComponent,
    children:[
        {
            path:'dashboard',
            component:DashboardComponent,
            title:'Dashboard'
        },
        {
            path:'upload',
            component:UploadComponent,
            title:'Upload'
        },
        {
            path:'ranker',
            component:RankerComponent,
            title:'Ranker'
        },
        {
            path:'report',
            component:ReportComponent,
            title:'Report'
        },
        {
            path:'resume',
            component:ResumeComponent,
            title:'Resume'
        },
        {
            path:'home',
            component:HomeComponent,
            title:'Home'
        }




    ]
}

];
