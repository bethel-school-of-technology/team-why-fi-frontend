// import { Component, OnInit } from '@angular/core';
// // import { LocationService } from './location.service';
// import { Observable } from 'rxjs';


// @Component({
//     selector: 'app-location',
//     templateUrl: './location.component.html',
//     styleUrls: ['./location.component.css']
//   })
//   export class LocationService implements OnInit {
//     posts: any[] = []; // Initialize an empty array for posts
//     post: any;
//     locations: any;
  
//     constructor(private LocationComponent: LocationService) {}
  
//     ngOnInit(): void {
//       this.getAllPosts(); 
//     }
  
//     getAllPosts(): void {
//       this.LocationService.getAllPosts().subscribe(
//         (posts: any[]) => {
//           this.posts = posts; // Assign fetched posts to the component property
//         },
//         (error: any) => {
//           console.error('Error fetching posts:', error);
//           // Handle the error (e.g., show an error message to the user)
//         }
//       );
//     }
  
//     createPost(message: string, imgUrl?: string): void {
//       const newPost = { message, imgUrl };
//       this.LocationService.createPost(newPost).subscribe(
//         () => {
//           console.log('Post created successfully');
//           // Optionally, redirect or perform other actions
//         },
//         (error: any) => {
//           console.error('Error creating post:', error);
//           // Handle the error (e.g., show an error message to the user)
//         }
//       );
//     }

//     deletePost(postId: number): void {
//        this.LocationService.deletePost(postId).subscribe(
//          () => {
//             console.log('Post deleted successfully');
//          },
//          (         error: any) => {
//             console.error('Error deleting post:', error);
//          });
//     }
            
//     getPostById(postId: number): void {
//         this.LocationService.getPostById(postId).subscribe(
//          (          post: any) => {
//                     this.post = post;
//           },
//           (         error: any) => {
//             console.error('Error fetching post:', error);
//           });
//     }
            
            
//     updatePost(post: Location): void {
//          this.LocationService.updatePost(post).subscribe(
//           (         updatedPost: any) => {
//             console.log('Post updated successfully');              },
//           (         error: any) => {
//             console.error('Error updating post:', error);
//           });
//     }
            
//     getAllLocations(): void {
//          this.LocationService.getAllLocations().subscribe((locations: any) => {
//                   this.locations = locations;
//           });
//     }

//   }

