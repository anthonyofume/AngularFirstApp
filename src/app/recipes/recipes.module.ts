import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms"
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { CommonModule } from "@angular/common";
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule
  ],
  declarations: [
    RecipeListComponent,
    RecipeEditComponent,
    RecipeDetailComponent
  ],
  exports: [
    RecipeListComponent,
    RecipeEditComponent]
})
export class RecipesModule {

}