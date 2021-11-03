import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
  
  repos: any;
  profile: any;
  username = 'davidmimay';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getProfileInfo().subscribe(profile => {
      console.log('your profile:', profile);
      this.profile = profile;
    });
    this.getProfileRepos().subscribe(repos => {
      console.log('your repos:', repos);
      this.repos = repos;
    });
  }

  private getProfileInfo() {
   return this.http.get('https://api.github.com/users/' + this.username)
  }

  private getProfileRepos() {
   return this.http.get('https://api.github.com/users/' + this.username + '/repos')
  }

}
