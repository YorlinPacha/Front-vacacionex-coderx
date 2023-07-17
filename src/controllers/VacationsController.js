// Controlador para interactuar con los endpoints del backend
const url = 'http://localhost:5000';
// Obtener todas las vacaciones
export function getAllVacations(secret, token) {
  var myHeaders = new Headers();
  myHeaders.append("logindate", secret);
  myHeaders.append("Authorization", "Bearer " + token);

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  return new Promise((resolve, reject) => {
    fetch(url + "/vacations", requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        resolve(data);
      })
      .catch(error => {
        console.error('Error al obtener las vacaciones:', error);
        reject(error);
      });
  });
}

// Obtener una vacación por ID
export function getVacationById(vacationId) {
  return fetch(url + `/vacations/${vacationId}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      return data; // Devuelve los datos de la vacación
    })
    .catch(error => {
      console.error('Error al obtener la vacación:', error);
    });
}

// Crear una vacación
export function createVacation(vacationData) {
  return fetch(url + '/vacations', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(vacationData)
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // Aquí puedes realizar las operaciones necesarias con la respuesta de creación de la vacación
    })
    .catch(error => {
      console.error('Error al crear la vacación:', error);
    });
}

// Actualizar una vacación
export const updateVacation = (vacationId, data) => {
  fetch(url + `/vacations/${vacationId}`, {
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

// Eliminar una vacación
export const deleteVacation = (vacationId) => {
  fetch(url + `/vacations/${vacationId}`, {
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
