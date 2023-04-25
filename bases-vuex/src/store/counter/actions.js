import getRandomNumber from '@/helpers/randomNumbers.js';
export const  getNumberRandom = async({commit})=>{
  commit("changeIsLoading", true);
  let number = await getRandomNumber();
  commit("setNumber", number);
  commit("changeIsLoading", false);
};