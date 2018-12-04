import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipes: Recipe[] = [
    new Recipe("Pancake", "How to make pancakes", "Itoro", "https://cdad5c1a4432622c031d-9e2498b30009308de15a0d52a7422974.ssl.cf1.rackcdn.com/menu/product/2-stack-of-pancakes_thumbnaillarge_2017-04-09-19-31-53.jpg"),
    new Recipe("Akara", "How to make Akara", "Itoro", "https://cdad5c1a4432622c031d-9e2498b30009308de15a0d52a7422974.ssl.cf1.rackcdn.com/menu/product/2-stack-of-pancakes_thumbnaillarge_2017-04-09-19-31-53.jpg"),
    new Recipe("Spaghetti", "How to make Spaghetti", "Itoro", "https://cdad5c1a4432622c031d-9e2498b30009308de15a0d52a7422974.ssl.cf1.rackcdn.com/menu/product/2-stack-of-pancakes_thumbnaillarge_2017-04-09-19-31-53.jpg"),
    new Recipe("Nonso", "How to make Nonso", "Itoro", "https://cdad5c1a4432622c031d-9e2498b30009308de15a0d52a7422974.ssl.cf1.rackcdn.com/menu/product/2-stack-of-pancakes_thumbnaillarge_2017-04-09-19-31-53.jpg"),
    new Recipe("Bosede", "How to make Bosede", "Itoro", "https://cdad5c1a4432622c031d-9e2498b30009308de15a0d52a7422974.ssl.cf1.rackcdn.com/menu/product/2-stack-of-pancakes_thumbnaillarge_2017-04-09-19-31-53.jpg"),
    new Recipe("Praise", "How to make Praise", "Itoro", "https://cdad5c1a4432622c031d-9e2498b30009308de15a0d52a7422974.ssl.cf1.rackcdn.com/menu/product/2-stack-of-pancakes_thumbnaillarge_2017-04-09-19-31-53.jpg"),
  ]
  constructor(private http: HttpClient) { }

  getRecipes() {
    return this.recipes;
  }
  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }
  getRecipe(index: number) {
    return this.recipes[index];
  }
  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
  }
  saveRecipes() {
    this.http.post('https://recipe-book-ng-76380.firebaseio.com/recipes.json', this.recipes);
  }
}
