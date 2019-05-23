import React from 'react';

const ItemEmployee = (props) => {
  return(
    <tr>
      <th scope="row">{props.noEmpleado}</th>
      <td>{props.nombre}</td>
      <td>{props.area}</td>
    </tr>
  )
}

export default ItemEmployee;