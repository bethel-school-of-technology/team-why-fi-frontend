import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Location } from "../models/location";



@Injectable({
    providedIn: 'root'
  })
  export class LocationService {
    posts: any[] = []; // Initialize an empty array for posts
    post: any;
    locations: any;
    url: string = 'http://localhost:5256/api/Location' //link connecting backend
    
        
  
     constructor(public http: HttpClient) { }
  

   getAllPosts(): Observable<Location[]> {
      return this.http.get<Location[]>(this.url);
   }

   createPost(location: Location) {
      return this.http.post(this.url, location);
   }
  
//     createPost(Message: string, ImgUrl?: string): void {
//       const newPost = { Message, ImgUrl };
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

   }


