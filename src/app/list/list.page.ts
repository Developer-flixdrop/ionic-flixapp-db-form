import { Component, OnInit } from '@angular/core';
import { UserCrudService } from './../services/user-crud.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})

export class ListPage implements OnInit {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Users: any = [];


  constructor( private userCrudService: UserCrudService,
    private router: Router ) { }

  ngOnInit() { }

  ionViewDidEnter() {
    this.userCrudService.getUsers().subscribe((response) => {
      this.Users = response;
    });
  }

  removeUser(user, i) {
    if (window.confirm('Are you sure')) {
      // eslint-disable-next-line no-underscore-dangle
      this.userCrudService.deleteUser(user._id)
      .subscribe((data) => {
          this.Users.splice(i, 1);
          this.router.navigate(['/create']);
          console.log('User deleted!');
        }
      );
    }
  }

}
