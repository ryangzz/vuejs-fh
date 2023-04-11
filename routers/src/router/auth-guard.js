const  autenticated = false;
const isAuthenticated = async (to, from, next) =>{
  return new Promise(()=>{
      if (to.name !== 'login' && !autenticated) next({ name: 'login' })
      next()
  })
}
export default isAuthenticated;