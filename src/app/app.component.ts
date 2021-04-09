import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature = 'recipe'

  constructor( private route:Router){}

  onNavigate(feature: string) {
    this.loadedFeature = feature
  }

  onLoadShoppingList() {
    this.route.navigate(['/shoppingList'], { queryParams: { allowEdit: '1' }, fragment: 'loading' });
    
  }
}
