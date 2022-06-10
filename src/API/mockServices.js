/**
 * Those functions allow the connection to the mocked datas
 * @returns mocked data.json
 */

import Error from "../Components/Error/error";

  /**
  * This function returns the general data of the userId concerned.
  */
 export function getList() {
    const baseUrl = "../mocked/mainData.json";
  
    return fetch(baseUrl).then((data) => data.json()).catch(function(error){
      console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
      return <Error />
    });
  }
  
  /**
  * This function returns the data activity of the userId concerned.
  */
  export function getActivity() {
    const baseUrl = "../mocked/activity.json";
  
    return fetch(baseUrl).then((data) => data.json()).catch(function(error){
      console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
      return <Error />
    });
  }

  /**
  * This function returns the data duration activity of the userId concerned.
  */
  export function getDuration() {
    const baseUrl = "../mocked/averageSession.json";
  
    return fetch(baseUrl).then((data) => data.json()).catch(function(error){
      console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
      return <Error />
    });
  }
  
  /**
  * This function returns the data of the activity's type of the userId concerned.
  */
  export function getRadar() {
    const baseUrl = "../mocked/performance.json";
  
    return fetch(baseUrl).then((data) => data.json()).catch(function(error){
      console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
      return <Error />
    });
  }
  