import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply recipe', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB0QqlYuAcpsnoWkihbWvFj0xbJiF8FB6t4A&usqp=CAU'),
    new Recipe('The good recipe','This is simply recipe','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB0QqlYuAcpsnoWkihbWvFj0xbJiF8FB6t4A&usqp=CAU')

  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
