import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { HomeComponent } from './home/home.component';
import { ShoppingListComponent } from './shopping-list/shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'recipes', component: RecipeListComponent },
  { path: 'recipes/new', component: RecipeEditComponent },
  { path: 'recipes/:id/edit', component: RecipeEditComponent },
  { path: 'recipes/:id', component: RecipeDetailComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}