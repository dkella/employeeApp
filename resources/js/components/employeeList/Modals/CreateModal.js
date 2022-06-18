import React, { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class CreateModal extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      employeeName:null,
      employeeSalary:null,
   }
  }

  
  //Creating employee name state
  inputEmployeeName =(event) =>{
    this.setState({
      employeeName:event.target.value,
    })
  }

  //Creating employee salary state
  inputEmployeeSalary =(event) =>{
    this.setState({
      employeeSalary:event.target.value,
    })
  }

  //Create employee data
  createEmployeeData = () =>{
    axios.post('create/employee/data',{
      employeeName:this.state.employeeName,
      employeeSalary:this.state.employeeSalary,
    }).then(()=>{
      toast.success('Employee Created successfully');
      setTimeout(() => {
        location.reload();
      }, 1000);
    })
  }

  render() {
    return (
      <>
        <div className='row text-right mb-3 pb-3'>
          <button className='btn btn-info text-right col-3 offset-md-9'
            data-toggle="modal"
            data-target="#createModal"
          >
            Add New Employee
          </button>
        </div>
        <div className="modal fade" id={"createModal"} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Employee Details</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form className='form'>
                    <div className='form-group'>
                      <input type='text' 
                        id="employeeName"
                        className='form-control mb-3 pd-3'
                        placeholder='Name'
                        onChange={this.inputEmployeeName}
                      />  
                    </div>

                    <div className='form-group'>
                      <input type='text' 
                        id="employeeName"
                        className='form-control mb-3 pd-3'
                        placeholder='Salary'
                        onChange={this.inputEmployeeSalary}
                        />  
                    </div>
                  </form>
              </div>
              <div className="modal-footer">
                <button type="button" 
                  className="btn btn-primary" 
                  data-bs-dismiss="modal"
                  onClick={() =>{this.createEmployeeData()}}
                >
                  Create
                </button>
                <button type="button" 
                  className="btn btn-secondary" 
                  data-bs-dismiss="modal"
                  >
                  Close
                </button>
                {/* <button type="button" className="btn btn-primary">Save changes</button> */}
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default CreateModal