import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  pageTitle = "Recipes"

  recipes = [
    { title: "Pancakes", description: "How to make pancakes", author: "Itoro", imageUrl: "https://cdad5c1a4432622c031d-9e2498b30009308de15a0d52a7422974.ssl.cf1.rackcdn.com/menu/product/2-stack-of-pancakes_thumbnaillarge_2017-04-09-19-31-53.jpg" },
    { title: "Akara", description: "How to make akara", author: "Motunrayo", imageUrl: "" },
    { title: "Spaghetti", description: "How to make spaghetti", author: "Dayo", imageUrl: "" },
  ]
  constructor() { }

  ngOnInit() {
  }

}
