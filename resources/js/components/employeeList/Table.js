import React, { Component } from 'react'
import ReactDOM from 'react-dom';

export class Table extends Component {

  //Get Employee List
  constructor(props) {
    super(props)
  
    this.state = {
       employees:[],
       
    }
  }
  getEmployeeList = () =>{

  }


  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                <table className="table table-hover">
                  <thead>
                <tr>
                  <th scope="col" width="100px">#</th>
                  <th scope="col" width="100px">Name</th>
                  <th scope="col" width="100px">Salary</th>
                  <th scope="col" width="100px">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td colSpan="2">Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>

              </table>
                </div>
            </div>
        </div>
    </div>
    )
  }
}

export default Table

            