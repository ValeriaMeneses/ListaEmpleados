import React from 'react';
import ItemEmployee from '../components/ItemEmployee';

const EmployeesTable = (props) => {

  let employeeData = props.dataEmployee.filter((item) => {
    let key = props.textSearch.toLowerCase();
    return (item.Nombre.toLowerCase().indexOf(key) >= 0 || item.Area.toLowerCase().indexOf(key) >= 0 || item.NoEmpleado.toLowerCase().indexOf(key) >= 0)
  })
  .map((item) => {
    return(
      <ItemEmployee key={item.NoEmpleado} noEmpleado={item.NoEmpleado} nombre={item.Nombre} area={item.Area}/>
    )
  })
  
  return(
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#Empleado</th>
            <th scope="col">Nombre</th>
            <th scope="col">Area</th>
          </tr>
        </thead>
        <tbody>
          {employeeData}
        </tbody>
      </table>
    </div>
  )
}

export default EmployeesTable;