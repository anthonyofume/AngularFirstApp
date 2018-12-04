import { Component } from '@angular/core';
import { RecipeService } from './recipes/shared/recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private recipeService: RecipeService) { }

  onSaveData() {
    this.recipeService.saveRecipes().subscribe(
      response => alert('saved')
    )
  }
  onGetData() {
    this.recipeService.getRecipesFromFireBase();
  }
}
