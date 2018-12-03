import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms"
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { CommonModule } from "@angular/common";
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { from } from 'rxjs';
@NgModule({
  imports: [
    CommonModule,
    FormsModule
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