import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipes = [
    { title: "Pancakes", description: "How to make pancakes", author: "Itoro", imageUrl: "https://cdad5c1a4432622c031d-9e2498b30009308de15a0d52a7422974.ssl.cf1.rackcdn.com/menu/product/2-stack-of-pancakes_thumbnaillarge_2017-04-09-19-31-53.jpg" },

    { title: "Akara", description: "How to make akara", author: "Motunrayo", imageUrl: "https://cdad5c1a4432622c031d-9e2498b30009308de15a0d52a7422974.ssl.cf1.rackcdn.com/menu/product/2-stack-of-pancakes_thumbnaillarge_2017-04-09-19-31-53.jpg" },
    { title: "Spaghetti", description: "How to make spaghetti", author: "Dayo", imageUrl: "https://cdad5c1a4432622c031d-9e2498b30009308de15a0d52a7422974.ssl.cf1.rackcdn.com/menu/product/2-stack-of-pancakes_thumbnaillarge_2017-04-09-19-31-53.jpg" },
  ]
  constructor() { }

  getRecipes() {
    return this.recipes;
  }
  addRecipe(recipe: any) {
    this.recipes.push(recipe);
  }
}
