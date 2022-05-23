/**
 * Those functions allow the connection to the mocked datas
 * @returns mocked data.json
 */

 function message(){
  // eslint-disable-next-line no-undef
  timeoutId = setTimeout(alert, 5000, 'Message d\'alerte après 5 secondes. Connexion impossible.'); 
}

 export function getList() {
    const baseUrl = "../mocked/mainData.json";
  
    return fetch(baseUrl).then((data) => data.json()).catch(function(error){
      console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
      
      clearTimeout(message);
    });
  }
  
  export function getActivity() {
    const baseUrl = "../mocked/activity.json";
  
    return fetch(baseUrl).then((data) => data.json()).catch(function(error){
      console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
      clearTimeout(message);
    });
  }
  
  export function getDuration() {
    const baseUrl = "../mocked/averageSession.json";
  
    return fetch(baseUrl).then((data) => data.json()).catch(function(error){
      console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
      clearTimeout(message);
    });
  }
  
  export function getRadar() {
    const baseUrl = "../mocked/performance.json";
  
    return fetch(baseUrl).then((data) => data.json()).catch(function(error){
      console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
      clearTimeout(message);
    });
  }
  