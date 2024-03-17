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
