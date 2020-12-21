import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService{
    recipeSelected =new EventEmitter<Recipe>(); 

    private recipes: Recipe[] = [
        new Recipe('At Test Recipe1 ', 'This is simply a test' ,
        'https://i1.wp.com/www.eatthis.com/wp-content/uploads/2019/10/pumpkin-pad-thai-recipe.jpg?fit=1200%2C879&ssl=1' 
        ,[new Ingredient('Meat ',1),
        new Ingredient('French Fries', 2) ]
         ),
        new Recipe('At Test Recipe2 ', 'This is simply a test' ,
        'https://i1.wp.com/www.eatthis.com/wp-content/uploads/2019/10/pumpkin-pad-thai-recipe.jpg?fit=1200%2C879&ssl=1' , [
            new Ingredient('Bun',3),
        new Ingredient('Meat ', 2) ]
         )
      ];

      constructor(private shoppingListSrvc:ShoppingListService){}

      getRecipes(){
          return this.recipes.slice(); 
      }
      
      addIngredientsToShoppingList(ingredients:Ingredient[]){
            this.shoppingListSrvc.addIngredients(ingredients);
      }
}


     