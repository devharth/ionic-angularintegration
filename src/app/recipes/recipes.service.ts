import { Injectable } from '@angular/core';
import { Recipe } from './recipes.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      // tslint:disable-next-line: max-line-length
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/5600_-_Brienz_-_Wiener_Schnitzel.JPG/800px-5600_-_Brienz_-_Wiener_Schnitzel.JPG',
      ingredients: ['French Fries', 'Pork Meat', 'Salad']
    },
    {
      id: 'r2',
      title: 'Spaguetti',
      // tslint:disable-next-line: max-line-length
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Spaghetti_and_meatballs_1.jpg/1200px-Spaghetti_and_meatballs_1.jpg',
      ingredients: ['Pasta', 'Meat Balls', 'Tomato Sauce']
    }
  ];

  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return { ...this.recipes.find(recipe => {
      return recipe.id === recipeId;
    })};
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
  }
}
