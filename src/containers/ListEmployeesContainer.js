import React from 'react';
import { data } from '../data/data';
import CheckActive from '../components/CheckActive';
import EmployeesTable from './EmployeesTable';

class ListEmployeesContainer extends React.Component {
  constructor(){
    super();
    this.state = {
      data: [],
      inputValue: '',
      isActive: false
    }

    this._handleChange = this._handleChange.bind(this);
    this._onClickActive = this._onClickActive.bind(this);
  }

  componentDidMount(){
    this.setState({ data: data })
  }

  _handleChange() {
    this.setState({inputValue: this.refs.searchKey.value});
  }

  _onClickActive(){
    if(this.state.isActive == false){
      this.setState({
        isActive: true,
        data: this.state.data.filter(item =>  item.Activo == true)
      })
    }else{
      this.setState({  isActive: false, data: data })
    }
  }

  render(){
    let { isActive,data,inputValue, inputSearch  } = this.state;

    return (
      <div>
        <div className="row text-center mb-3">
          <div className="input-group mb-3 col-sm-6">
            <input type="text" className="form-control" placeholder="Buscar" ref="searchKey" onChange={this._handleChange} />
            <div className="input-group-append">
              <button className="btn btn-primary" type="button">
                <i className="fas fa-search text-white" />
              </button>
            </div>
          </div>
          <CheckActive isActive={isActive} _onClickActive={this._onClickActive} />
        </div>
        <EmployeesTable dataEmployee={data} textSearch={inputValue} />
      </div>
    );
  }
}

export default ListEmployeesContainer;