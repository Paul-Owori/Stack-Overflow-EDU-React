export const checkForToken = async (token) =>{
    let bearer_token;
  
    const findToken = ()=>{
      if(token && token.token){
        bearer_token = `Bearer ${token.token}`
      }
      else{
        bearer_token = undefined
      }
    }

    await findToken()
  
    return bearer_token
  
  }