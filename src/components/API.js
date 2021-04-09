//const APIKey ="z4_laOyZSkMTXM77QOyQcHtA919Qe-5cMFygWGOmSig";

const Pagenum=Math.floor((Math.random() * 1000) + 1);

export const FoodAPI = "https://api.unsplash.com/search/photos?client_id=z4_laOyZSkMTXM77QOyQcHtA919Qe-5cMFygWGOmSig&page="+Pagenum+"&query=food only";
export const NuitritonFacts = (FoodName) => `https://api.calorieninjas.com/v1/nutrition?query=${FoodName}`;
export const SearchedFood = (SearchedFood) => `https://api.unsplash.com/search/photos?client_id=z4_laOyZSkMTXM77QOyQcHtA919Qe-5cMFygWGOmSig&page=1&query=${SearchedFood} food`;