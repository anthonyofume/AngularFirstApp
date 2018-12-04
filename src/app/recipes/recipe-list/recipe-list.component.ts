import { Component, OnInit, Injectable } from '@angular/core';
import { RecipeService } from '../shared/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  pageTitle = "Recipes"
  recipes = [];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  deleteMe(index: number) {
    this.recipeService.deleteRecipe(index);
  }
}
