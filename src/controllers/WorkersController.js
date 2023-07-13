// Controlador para interactuar con los endpoints del backend

const url = 'http://localhost:5000';

export function createLogin(loginData) {
  fetch(url + '/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(loginData)
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      let tokenLS = JSON.stringify(data.token); //Lo preparas para LS
      sessionStorage.setItem("tokenLS", tokenLS); //Y mandas el token
      let userLS = JSON.stringify(data.worker); //Lo preparas para LS
      sessionStorage.setItem("userLS", userLS); //Y mandas el user
      let secretLS = JSON.stringify(data.secret); //Lo preparas para LS
      sessionStorage.setItem("secretLS", secretLS); //Y mandas el secret
    })
    .catch(error => {
      console.log('Error al crear el login:', error);
    });
}

// Endpoint de obtener todos los workers
export function getAllWorkers(secret, token) {
  var myHeaders = new Headers();
  myHeaders.append("logindate", secret);
  myHeaders.append("Authorization", "Bearer " + token);

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  return new Promise((resolve, reject) => {
    fetch(url + "/workers", requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        resolve(data);
      })
      .catch(error => {
        console.error('Error al obtener los workers:', error);
        reject(error);
      });
  });
}

// Endpoint de obtener un worker por ID
export function getWorkerById(workerId) {
  return fetch(url + `/workers/${workerId}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      return data; // Devuelve los datos del trabajador
    })
    .catch(error => {
      console.error('Error al obtener el worker:', error);
    });
}

// Endpoint de crear un worker
export function createWorker(workerData) {
  return fetch(url + '/workers', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(workerData)
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // Aquí puedes realizar las operaciones necesarias con la respuesta de creación del worker
    })
    .catch(error => {
      console.error('Error al crear el worker:', error);
    });
}

// Actualizar un worker
export const updateWorker = (workerId, data) => {
  fetch(url + `/workers/${workerId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(result => {
      console.log(result.message);
      // Realizar acciones adicionales después de la actualización exitosa
    })
    .catch(error => {
      console.error('Error:', error);
      // Manejar el error de la actualización
    });
};

// Eliminar un worker
export const deleteWorker = (workerId) => {
  fetch(url + `/workers/${workerId}`, {
    method: 'DELETE'
  })
    .then(response => response.json())
    .then(result => {
      console.log(result.message);
      // Realizar acciones adicionales después de la eliminación exitosa
    })
    .catch(error => {
      console.error('Error:', error);
      // Manejar el error de la eliminación
    });
};
