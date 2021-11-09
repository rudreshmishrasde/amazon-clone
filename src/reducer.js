export const initialState = {
    basket : [
        
    ],
    user : null,
};

export const getBasketTotal = (basket) =>
basket?.reduce((amount , item) => item.price + amount , 0);

const reducer = (state ,action) => {
   // console.log(action);
   switch(action.type)
   {
       case 'SET_USER':
           return{
               ...state,
               user:action.user
           };
       case  'ADD_TO_BASKET' :
           return{
               ...state,
            basket : [...state.basket, action.item],  // ... means spread operator ( to handle immutability)
        };
           
           case 'REMOVE_FROM_BASKET':
               let newBasket = [...state.basket];
               const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)
               if(index >= 0)
               {
                   //if item exists , remove it
                   newBasket.splice(index , 1)
               }else
               {
                   console.warn(`cant remove product (id:${action.id}) as it is not in basket`);
               }
               return {...state , basket : newBasket};
               
               default :
               return state;
   }

}
export default reducer;