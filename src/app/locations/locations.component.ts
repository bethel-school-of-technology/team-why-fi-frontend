import { Component, OnInit } from '@angular/core';
import { LocationService } from '../services/location.service';
import { Location } from "../models/location";

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.css'
})
export class LocationsComponent implements OnInit {

  constructor(private locationService: LocationService) {}

    public locations: Location[] = [];

      ngOnInit(): void {
        this.locationService.getAllPosts().subscribe(
          (locations: Location[]) => {
            this.locations = locations; // Assign fetched posts to the component property
          },
          (error: any) => {
            console.error('Error fetching posts:', error);
            // Handle the error (e.g., show an error message to the user)
          }
        );
    }

}
