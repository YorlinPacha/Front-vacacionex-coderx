<template>

    <a class="btn btn-primary" href="#" role="button">Nuevo Trabajador</a>
    <a class="btn btn-primary" href="#" role="button">Nuevo Calendario</a>
    
    
    <a class="btn btn-primary" href="#" role="button">Tabla Calendario</a>
    <a class="btn btn-primary" href="#" role="button">Tabla Trabajador</a>
    
    
    
    <table class="table"> 
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Position</th>
          <th scope="col">Seniority</th>
          <th scope="col">Departament</th>
          <th scope="col">Email</th>
          <th scope="col">Password</th>
          
        </tr>
    
      </thead>
      <tbody>
    
        <tr>
          <th scope="row">1</th>
          <td>321</td>
          <td>Lucas Ibar</td>
          <td>Contable</td>
          <td>1996</td>
          <td>Talento</td>
          <td>lucasibar@somosf5.com</td>
          <td>contraseña</td><input class="btn btn-primary" type="submit" @click="Editar(321)">
          <td></td><input class="btn btn-primary" type="reset" @click="Eliminar(321)">
    
    
        </tr>
    
        <tr>
          <th scope="row">2</th>
          <td>532</td>
          <td>Jorge  Garcia</td>
          <td>Psicologo</td>
          <td>2003</td>
          <td>Pedagogia</td>
          <td>jorgegarcia@somosf5.com</td>
          <td>contraseña</td><input class="btn btn-primary" type="submit" @click="Editar(321)">
          <td></td><input class="btn btn-primary" type="reset" @click="Eliminar(321)">
        </tr>
    
        
        <tr>
          <th scope="row">2</th>
          <td>532</td>
          <td>Jorge  Garcia</td>
          <td>Psicologo</td>
          <td>2003</td>
          <td>Pedagogia</td>
          <td>jorgegarcia@somosf5.com</td>
          <td>contraseña</td><input class="btn btn-primary" type="submit" @click="Editar(321)">
          <td></td><input class="btn btn-primary" type="reset" @click="Eliminar(321)">
        </tr>
    
    
         <tr>
          <th scope="row">2</th>
          <td>987</td>
          <td>Jess Lopez</td>
          <td>Desarrollo de Negocio</td>
          <td>2007</td>
          <td>Red</td>
          <td>jessslopez@somosf5.com</td>
          <td>contraseña</td><input class="btn btn-primary" type="submit" @click="Editar(321)">
          <td></td><input class="btn btn-primary" type="reset" @click="Eliminar(321)">
        </tr>
    
        <tr>
          <th scope="row">2</th>
          <td>111</td>
          <td>Carlos Baute</td>
          <td>Profesor</td>
          <td>2013</td>
          <td>Vocacion</td>
          <td>carlosbaute@somosf5.com</td>
          <td>contraseña</td><input class="btn btn-primary" type="submit" @click="Editar(321)">
          <td></td><input class="btn btn-primary" type="reset" @click="Eliminar(321)">
        </tr>
        
        </tbody>
    </table>
    
    
    
    
    </template>
    
    <script  >
    
    
    </script>
    
    <style scoped>
    
    </style>
    