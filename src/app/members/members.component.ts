import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
})

export class MembersComponent implements OnInit {
  name: any;
  state: string = '';

  logout() {
     this.af.auth.logout();
     this.router.navigateByUrl('/login');
  }


  ngOnInit() {
  }
}
