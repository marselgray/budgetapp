
//Budget Controller
var budgetController = (function(){
     
})();




// UI Controller
var UIController = (function(){
    // some code will go here later
})();



// Global App Controller
var controller = (function(budgetCtrl, UICtrl){

    var ctrlAddItem = function (){
        // 1. get the field input data
        // 2. add the item to the budget controller
        // 3. add the item to the UI 
        // 4. calculate the budget
        // 5. display the budget  on the UI
        console.log('it works');
    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);


    document.addEventListener('keypress', function(event){
        
        //older browsers don't use 'keycode' but use 'which'
        if (event.keyCode === 13 || event.which === 13 ){
            ctrlAddItem();
        } 
    });

})(budgetController, UIController);



