import React from 'react';

const CheckActive = (props) => {
  return (
    <div className="col-12 col-sm-6 text-sm-right">
      <div className="btn-group ">
        <button className="btn btn-primary" onClick={props._onClickActive}><i className={`fas fa-${props.isActive ? 'check' : 'times'} text-white`} /></button>
        <button className="btn btn-outline-primary" disabled>Ver Activos</button>
      </div>
    </div>
  );
}

export default CheckActive;