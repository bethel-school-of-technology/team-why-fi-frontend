import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavagationComponent } from './navagation/navagation.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent },
  { path: 'review', component: ReviewsComponent },
  { path: 'navagation', component: NavagationComponent },
  { path: 'Footer', component: FooterComponent  },
  { path: 'AboutUs', component: AboutUsComponent },


  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
  { path: '**', component: PageNotFoundComponent } // Redirect to home for unknown routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
