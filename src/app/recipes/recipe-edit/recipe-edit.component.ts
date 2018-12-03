import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onAddRecipe(form) {
    alert(JSON.stringify(form.value));
    console.log(form);
  }

}
