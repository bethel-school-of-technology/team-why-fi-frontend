import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../models/user";
import { tap } from "rxjs";


@Injectable({
    providedIn: 'root'
  })
  export class UserService {
    private _isloggedin=false;
    private _userName = "";
    private _user=new User();
  
    baseURL: string = "http://localhost:5256";  //Link that connects front and backend?
    tokenKey: string = "myPostToken";
  
    constructor(private http: HttpClient) { }
  
  signUp(newUser: User){
    this._user= newUser;
    return this.http.post(`${this.baseURL}/api/Auth/register`, newUser);
  }
  get isLoggedIn(): boolean{
    return this._isloggedin;
  }
  get getUserName(): string{
    return this._isloggedin ? this._userName :"";
  }
  
  getUser(userId: string) {
    let reqHeaders = {
      Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
  }
  return this.http.get<User>(this.baseURL+"/"+userId, { headers: reqHeaders });
  }
  
  login(user: User){
  
    return this.http.get(`${this.baseURL}/api/Auth/login?username=${user.username}&password=${user.password}`, { responseType: 'text' })
      .pipe(tap((response: any) => {
        localStorage.setItem('myPostToken', response);
        this._isloggedin=true
        this._userName=user.username
        console.log({this_userService_login:this})
      }));
  }
  }
