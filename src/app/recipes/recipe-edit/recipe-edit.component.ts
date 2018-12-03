import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../shared/recipe.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  constructor(private recipeService: RecipeService, private router: Router) { }

  ngOnInit() {

  }
  onAddRecipe(form) {
    this.recipeService.addRecipe(form.value);
    this.router.navigate(['/recipes'])
  }

}
