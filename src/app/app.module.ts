import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { MyListingsComponent } from './components/my-listings/my-listings.component';
import { SubHeaderComponent } from './components/sub-header/sub-header.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'myListings', component: MyListingsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SubHeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
