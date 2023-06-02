import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipe: Recipe[] = [
    new Recipe("Testing recipe", "this is a just test", "https://www.google.pl/imgres?imgurl=https%3A%2F%2Fimages.immediate.co.uk%2Fproduction%2Fvolatile%2Fsites%2F30%2F2013%2F05%2FChicken-leek-and-broccoli-rice-stir-fry-ffe0df6.jpg%3Fquality%3D90%26resize%3D556%2C505&tbnid=dwk-utopmoYIHM&vet=12ahUKEwi255qa-aT_AhXLg_0HHQNLB0EQMygJegUIARD2AQ..i&imgrefurl=https%3A%2F%2Fwww.bbcgoodfood.com%2Frecipes%2Fcollection%2Fquick-and-healthy-recipes&docid=yEmFFlBCuS-lMM&w=556&h=505&q=recipe&ved=2ahUKEwi255qa-aT_AhXLg_0HHQNLB0EQMygJegUIARD2AQ"),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
