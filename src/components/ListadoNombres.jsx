import React, {useState} from 'react'
import uniqid from 'uniqid'

function ListadoNombres() {

  const [nombre, setNombre] = useState('')
  const [listadoNombres, setListadoNombres] = useState([])

  const addNombre = (event) => {
    event.preventDefault()
    const nuevoNombre = {
      id: uniqid(),
      nombreUsuario: nombre
    }
    setListadoNombres([...listadoNombres, nuevoNombre])
    setNombre("")
  }

  return (
    <div>
      <h2>Aplicación CRUD básica</h2>
      <div className="row">
        <div className="col">
          <h2>Listado de nombres</h2>
          <ul className="list-group">
            {
              listadoNombres.map(item => 
                <li key={item.id} className="list-group-item">{item.nombreUsuario}</li>
              )
            }
          </ul>
        </div>
        <div className="col">
          <h2>Formulario para añadir nombres</h2>
          <form onSubmit={(event) => addNombre(event)} className="form-group">
            <input 
            onChange= {(event) =>{setNombre(event.target.value)}} 
            className="form-control mb-3" 
            placeholder="Introduce el nombre"
            value= {nombre}
            />
            <input 
            className="btn btn-info btn-block" 
            type="submit" 
            value="Registrar nombre"/>
          </form>
        </div>    
      </div>
    </div>
  )
}

export default ListadoNombres
