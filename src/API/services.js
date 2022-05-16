
 export function getApiList(userId) {
    const baseUrl = `http://localhost:3000/user/${userId}`;
  
    return fetch(baseUrl).then((data) => data.json());
  }
  
  export function getApiActivity(userId) {
    const baseUrl = `http://localhost:3000/user/${userId}/activity`;
  
    return fetch(baseUrl).then((data) => data.json());
  }
  
  export function getApiDuration(userId) {
    const baseUrl = `http://localhost:3000/user/${userId}/average-sessions`;
  
    return fetch(baseUrl).then((data) => data.json());
  }
  
  export function getApiRadar(userId) {
    const baseUrl = `http://localhost:3000/user/${userId}/performance`;
  
    return fetch(baseUrl).then((data) => data.json());
    
  }

  console.log('Données de  GET API LIST:', getApiList);
  console.log('Données de  GET API ACTIVITY:', getApiActivity);
  console.log('Données de  GET API DURATION:', getApiDuration);
  console.log('Données de  GET API RADAR:', getApiRadar);