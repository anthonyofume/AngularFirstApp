import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

const appRoutes: Routes = [
  { path: 'recipes', component: RecipeListComponent },
  { path: 'recipes/:id/edit', component: RecipeEditComponent },
  { path: '', redirectTo: '/recipes', pathMatch: 'full' }
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