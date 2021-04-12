import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';
export class RecipeService{
  
  
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply recipe',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB0QqlYuAcpsnoWkihbWvFj0xbJiF8FB6t4A&usqp=CAU',
      [
        new Ingredient('Cake', 4),
        new Ingredient('Chocolate',1 )
    ]),
    new Recipe(
      'The good recipe',
      'This is simply recipe',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB0QqlYuAcpsnoWkihbWvFj0xbJiF8FB6t4A&usqp=CAU',
      [
        new Ingredient('Cake', 4),
        new Ingredient('Chocolate',1 )
    ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(index: number) {
    return this.recipes[index];
  }


}