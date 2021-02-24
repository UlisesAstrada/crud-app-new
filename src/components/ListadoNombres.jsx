import React, {useState} from 'react'
import uniqid from 'uniqid'

function ListadoNombres() {

  const [nombre, setNombre] = useState('')
  const [listadoNombres, setListadoNombres] = useState([])

  const addNombre = () => {

  }

  return (
    <div>
      <h2>Aplicación CRUD básica</h2>
      <div className="col">
        <h2>Listado de nombres</h2>
      </div>
      <div className="col">
        <h2>Formulario para añadir nombres</h2>
        <form className="form-group">
          <input 
          onChange= {(event) =>{setNombre(event.target.value)}} 
          type="text" 
          className="form-control mb-3" 
          placeholder="Introduce el nombre"/>
          <input 
          className="btn btn-info btn-block" 
          type="submit" 
          value="Registrar nombre"/>
          </form>
      </div>    
    </div>
  )
}

export default ListadoNombres
