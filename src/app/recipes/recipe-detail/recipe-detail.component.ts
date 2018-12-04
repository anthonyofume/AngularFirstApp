import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../shared/recipe.service';
import { Recipe } from '../shared/recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe;
  constructor(private route: ActivatedRoute,
    private recipeservice: RecipeService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      (params: Params) => {
        let id = +params.get("id");

        this.recipe = this.recipeservice.getRecipe(id);
      }
    );
  }

}
