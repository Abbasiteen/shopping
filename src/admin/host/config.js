  import { host,httpRequest,access_token } from './host'


  export const deleteTimeslots= key => {
    let config = {
        url: `${host}/time-slots/${key}/`,
        method: "delete",
        headers: {
          'Authorization': `Token ${access_token}`,
        }
      };
      return httpRequest(config);
    };


    export const postUsers= (formDataObj) => {
    let config = {
        url: `${host}/users/`,
        method: "post",
        data: formDataObj,
        headers: {
          'Authorization': `Token ${access_token}`,
          "Content-Type": "multipart/form-data"
        }
      };
      return httpRequest(config);
    };
   
    export let getContact= () => {
      let config = {
        url: `${host}/contact/`,
        method: "GET",
          headers: {
            'Authorization': `Token ${access_token}`
          }
      };
      
      return httpRequest(config);
    }
 
    export const postLogin= (formDataObj) => {
      let config = {
          url: 'https://api.codecraft.uz/auth/login/',
          method: "post",
          data: formDataObj,
        };
        return httpRequest(config);
      };