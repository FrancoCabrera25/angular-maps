import { Component } from '@angular/core';

export interface MenuItem  {
  name: string,
  route: string,
}


@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent {

  public menuItems : MenuItem[] = [
    {
      name: 'FullScreen',
      route: '/maps/fullscreeen'
    },
    {
      name: 'Zoom range',
      route: '/maps/zoom-range'
    },
    {
      name: 'Markers',
      route: '/maps/markers'
    },
    {
      name: 'Houses',
      route: '/maps/properties'
    }
  ]

}
