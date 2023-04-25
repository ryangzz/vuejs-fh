export const increment  = (state)=>{
  state.counter++;
};
export const incrementBy  = (state, x)=>{
  state.counter+=x;
};
export const setNumber  = (state, number)=>{
  state.counter = number;
};
export const changeIsLoading  = (state, loading)=>{
  state.isLoading = loading;
};