import { NgModule } from "@angular/core";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { CommonModule } from "@angular/common";
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    RecipeListComponent,
    RecipeEditComponent
  ],
  exports: [RecipeListComponent,
    RecipeEditComponent]
})
export class RecipesModule {

}