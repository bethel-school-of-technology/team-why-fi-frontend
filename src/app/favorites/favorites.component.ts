import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocationService } from '../services/location.service';
import { Location } from '../models/location';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  locationTitle: string = '';
  imgURL: string = '';
  reviewList: Location[] = [];

  constructor( private router: Router) {}       //private locationService: LocationService, 

  ngOnInit(): void {
    this.loadReviews();
    this.fetchLocationsInfo()
  }
    loadReviews() {
        throw new Error('Method not implemented.');
    }

  fetchLocationsInfo(): void {
    this.locationTitle = history.state.locationTitle || '';
    this.imgURL = history.state.imgURL || '';
  }
}
  
//   loadReviews(): void {
//     this.locationService.getAllReviews().subscribe(
//       (reviews: any[]) => {
//         reviews.forEach(review => {
//           this.locationService.getLocationsByID(review.locationId).subscribe(
//             (location: Location) => {
//               const newReview: Location = {
//                 postId: review.postId,
//                 location: location.location,
//                 imgUrl: location.imgUrl,
//               };
//               this.reviewList.push(newReview);
//             },
//             (error: any) => {
//               console.error('Error fetching location details:', error);
//             }
//           );
//         });
//       },
//       (error: any) => {
//         console.error('Error fetching reviews:', error);
//       }
//     );
//   }

//   updateReview(reviewId: number): void {
//     this.router.navigate(['/edit-review', reviewId]);
//   }

//   deleteReview(reviewId: number): void {
//     this.locationService.deleteReview(reviewId.toString()).subscribe(
//       () => {
//         this.reviewList = this.reviewList.filter(review => review.location !== reviewId);
//         console.log('Review deleted successfully');
//       },
//       (error: any) => {
//         console.error('Error deleting review:', error);
//       }
//     );
//   }
// }
