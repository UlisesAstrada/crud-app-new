import React, {useState} from 'react'
import uniqid from 'uniqid'

function ListadoNombres() {

  const [nombre, setNombre] = useState('')
  const [listadoNombres, setListadoNombres] = useState([])
  const [modoEdicion, setModoEdicion] = useState(false)
  const [id, setId] = useState('')
  const [error, setError] = useState(null)


  const addNombre = (event) => {
    event.preventDefault()
    if(!nombre.trim()) {
      setError('El campo nombre está vacío')
      return
    }
    const nuevoNombre = {
      id: uniqid(),
      nombreUsuario: nombre
    }

    setListadoNombres([...listadoNombres, nuevoNombre])
    setNombre('')
    setError(null)
  }

  const removeNombre = (id) => {
    const nuevoArray =  listadoNombres.filter(item => item.id !== id)
    setListadoNombres(nuevoArray)

  }

  const editar = (item) => {
    setModoEdicion(true)
    setNombre(item.nombreUsuario)
    setId(item.id)
  }

  const editarNombre = (event) => {
    event.preventDefault()
    const arrayNew = listadoNombres.map(item => item.id === id ? {id:item.id, nombreUsuario:nombre} : item)
    setListadoNombres(arrayNew)
    setNombre('')
    setModoEdicion(false)
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
                <li key={item.id} className="list-group-item">
                  {item.nombreUsuario}
                  <button
                  className="btn btn-info float-right"
                  onClick={() => {editar(item)}}
                  >
                    Editar
                  </button>
                  <button 
                  className="btn btn-danger float-right mr-3"
                  onClick={() => {removeNombre(item.id)}}>
                    BORRAR
                  </button>
                </li>
              )
            }
          </ul>
        </div>
        <div className="col">
          <h2>Formulario para añadir nombres</h2>
          <form onSubmit={modoEdicion ? editarNombre : addNombre} className="form-group">
            <input 
            onChange= {(event) =>{setNombre(event.target.value)}}
            className="form-control mb-3" 
            placeholder="Introduce el nombre"
            value= {nombre}
            />
            <input 
            className="btn btn-info btn-block" 
            type="submit" 
            value={modoEdicion ? 'Editar nombre' : 'Registrar nombre'}/>
          </form>
          {
            error !== null ? 
            (<div className='alert alert-danger' role='alert'> {error} </div>) 
            :
            (<div></div>)
          }
        </div>    
      </div>
    </div>
  )
}

export default ListadoNombres
