import axios from "axios";

export function getApi(url) {
    return new Promise((resolve, reject) => {
      axios
        .get(url)
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
          console.log(url, 'url GET');
        });
    });
  }