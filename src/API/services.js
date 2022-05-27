


 
 export function getApiList(userId) {
    const baseUrl = `http://localhost:3000/user/${userId}`;
  
    return fetch(baseUrl).then((data) => data.json())
    .catch(function(error){
      setTimeout(function() { alert("Connexion impossible. Veuillez retourner sur l'accueil.", error.message); }, 5000);
    });
  }
  
  export function getApiActivity(userId) {
    const baseUrl = `http://localhost:3000/user/${userId}/activity`;
  
    return fetch(baseUrl).then((data) => data.json()).catch(function(error){
      console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
    });
  }
  
  export function getApiDuration(userId) {
    const baseUrl = `http://localhost:3000/user/${userId}/average-sessions`;
  
    return fetch(baseUrl).then((data) => data.json()).catch(function(error){
      console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
    });
  }
  
  export function getApiRadar(userId) {
    const baseUrl = `http://localhost:3000/user/${userId}/performance`;
  
    return fetch(baseUrl).then((data) => data.json()).catch(function(error){
      console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
    });
    
    
  }

