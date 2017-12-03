import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipes.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingService} from '../shopping-list/shopping.service';

@Injectable()
export class RecipeService {

  constructor(private shoppingService: ShoppingService){}

  recipeSelected = new EventEmitter<Recipe>();

  private  recipes: Recipe[] = [
    new Recipe( 'Recipie A', 'Recipe A Desc', 'http://www.seriouseats.com/recipes/assets_c/' +
      '2015/01/20150119-pressure-cooker-chicken-stew-food-lab-11-thumb-1500xauto-418088.jpg',
    [
      new Ingredient('Chicken', 1),
      new Ingredient('Egg', 1)
    ]),
    new Recipe( 'Recipie B', 'Recipe B Desc', 'http://www.seriouseats.com/recipes/assets_c/2015/12/20151218-' +
      'braised-chicken-thigh-cabbage-pancetta-recipe-kenji' +
      '-14-thumb-1500xauto-428923.jpg',
    [
          new Ingredient('Meat', 1),
          new Ingredient('Egg', 1)
    ])
  ];

  getRecipes (){
    return this.recipes.slice();
  }

  addIngredientToSL(ingredient: Ingredient[]) {
    this.shoppingService.addIngredientToShoppingList(ingredient);
  }
}
