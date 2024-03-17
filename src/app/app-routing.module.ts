import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './signup/signup.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { NavagationComponent } from './navagation/navagation.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
// import { LocationsComponent } from './locations/locations.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'home', component: HomeComponent },
  { path: 'review', component: ReviewsComponent },
  { path: 'Navagation', component: NavagationComponent },
  { path: 'Footer', component: FooterComponent },
  { path: 'About-Us', component: AboutUsComponent},
  // { path: 'locations', component: LocationsComponent},
  { path: 'favorites', component: FavoritesComponent},



 { path: '**', component: PageNotFoundComponent } // Redirect to home for unknown routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
