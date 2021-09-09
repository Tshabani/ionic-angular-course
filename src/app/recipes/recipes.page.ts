import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipes.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
 recipes: Recipe[] = [
  {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl:'https://assets.bonappetit.com/photos/57ae1afd53e63daf11a4e26f/1:1/w_2560%2Cc_limit/chicken-schnitzel.jpg',
      ingredients:['French Fries', 'Pork Meat', 'Salad']
  },
  {
    id: 'r2',
    title: 'Spaghetti',
    imageUrl:'https://www.inspiredtaste.net/wp-content/uploads/2019/03/Spaghetti-with-Meat-Sauce-Recipe-3-1200.jpg',
    ingredients:['Spaghetti', 'Meat', 'Tomatoes']
},
];

  constructor() { }

  ngOnInit() {
  }

}
