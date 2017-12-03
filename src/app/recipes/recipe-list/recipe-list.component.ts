import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipes.model';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  //@Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [];

 /* recipes: Recipe[] = [
    new Recipe( 'Test Recipie A', 'Test Recipe A Desc', 'http://www.seriouseats.com/recipes/assets_c/' +
      '2015/01/20150119-pressure-cooker-chicken-stew-food-lab-11-thumb-1500xauto-418088.jpg'),
    new Recipe( 'Test Recipie B', 'Test Recipe B Desc', 'http://www.seriouseats.com/recipes/assets_c/' +
      '2015/01/20150119-pressure-cooker-chicken-stew-food-lab-11-thumb-1500xauto-418088.jpg')
  ];*/

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    console.log(this.recipes);
  }

  /*onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }*/

}
