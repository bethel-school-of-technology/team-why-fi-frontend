export class Location {
    postId?: string;
    message?: string;
    imgUrl: any;
    location?: string;

    constructor(postId?: string, message?: string, imgUrl?: any, location?: string) {
        this.postId = postId;
        this.message = message;
        this.imgUrl = imgUrl;
        this.location = location;
    }
}
