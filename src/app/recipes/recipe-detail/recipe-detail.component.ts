import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipes.model';
import {RecipeService} from '../recipe.service';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe: Recipe;

  constructor(private recipieService: RecipeService) { }

  ngOnInit() {
  }

  addIngredientToSL(){
    this.recipieService.addIngredientToSL(this.recipe.ingredients);
  }

}
