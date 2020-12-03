class Food{
    constructor(){
        this.foodStack=0;
        this.lastFed=lastFed;
        this.image=loadImage("Milk.png");
        
    }
display(){
 var x=80, y=100;

 imageMode (CENTER);
 image(this.image,500,220,70,70);

 if(this.foodStack!=0){
     for(var i=0;i<this.foodStack;i++){
         if(i%10==0){
             x=80;
             y=y+50;
           
         }
         image(this.image,x,y,50,50);
         x=x+30;
    
     }
 }
}
updateFoodStock(foodStack){
    this.foodStack=foodStack;

}
getFoodStock(){
    return this.foodStack;

}

}