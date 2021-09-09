import { Recipe } from './../recipes.model';
import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
 loadedRecipe: Recipe;

  constructor(private recipesService: RecipesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('recipeId')){
        //redirect
        return;
      }
      const recipeId = paramMap.get('recipeId');
      this.loadedRecipe = this.recipesService.getRecipe(recipeId);
    });
  }
}
