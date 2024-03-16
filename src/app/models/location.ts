export class Location {
    LocationID?: string;
    Message?: string;
    ImgUrl: any;
    Location?: string;

    constructor(LocationID?: string, Message?: string, ImgUrl?: any, Location?: string) {
        this.LocationID = LocationID;
        this.Message = Message;
        this.ImgUrl = ImgUrl;
        this.Location = Location;
    }
}





// using System.Collections.Generic;
// using backend.Models;

// namespace backend.Repositories;
// public interface ILocationRepository
// {
//     IEnumerable<Post> GetAllPost();
//     Post? LocationID (int PostId);
//     Post CreatePost(Post newPost);
//     Post? UpdatePost(Post newPost);
//     void DeletePostById(int PostId);

// }
