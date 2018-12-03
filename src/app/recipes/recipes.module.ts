import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms"
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { CommonModule } from "@angular/common";
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { from } from 'rxjs';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    RecipeListComponent,
    RecipeEditComponent,
    RecipeDetailComponent
  ],
  exports: [RecipeListComponent,
    RecipeEditComponent]
})
export class RecipesModule {

}