
/**
 * Those functions allow the connection to the backend part.
 * @returns data.json
 */

 /**
 * This function returns the general data of the userId concerned.
 */
 export function getApiList(userId) {
    const baseUrl = `http://localhost:3000/user/${userId}`;
  
    return fetch(baseUrl).then((data) => data.json())
    .catch(function(error){
      console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
    });
  }
  
 /**
 * This function returns the data activity of the userId concerned.
 */
  export function getApiActivity(userId) {
    const baseUrl = `http://localhost:3000/user/${userId}/activity`;
  
    return fetch(baseUrl).then((data) => data.json()).catch(function(error){
      console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
    });
  }
  
 /**
 * This function returns the data duration activity of the userId concerned.
 */
  export function getApiDuration(userId) {
    const baseUrl = `http://localhost:3000/user/${userId}/average-sessions`;
  
    return fetch(baseUrl).then((data) => data.json()).catch(function(error){
      console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
    });
  }
  
  /**
  * This function returns the data of the activity's type of the userId concerned.
  */
  export function getApiRadar(userId) {
    const baseUrl = `http://localhost:3000/user/${userId}/performance`;
  
    return fetch(baseUrl).then((data) => data.json()).catch(function(error){
      console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
    });
    
    
  }

