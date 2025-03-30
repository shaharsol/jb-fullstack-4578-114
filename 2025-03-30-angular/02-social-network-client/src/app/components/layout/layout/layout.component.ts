import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { FollowingComponent } from "../../follows/following/following.component";
import { FollowersComponent } from "../../follows/followers/followers.component";

@Component({
  selector: 'app-layout',
  imports: [HeaderComponent, FooterComponent, FollowingComponent, FollowersComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
