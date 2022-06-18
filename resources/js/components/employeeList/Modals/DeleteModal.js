import React, { Component } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export class DeleteModal extends Component {
  constructor(props) {
    super(props)
  
    // this.state = {
    //    employee
    // }
  }

  //Delete function for employee data
  deleteEmployeeData = (employee) =>{
    axios.delete('delete/employee/data/'+employee).then(() =>{
      toast.error("Employee Deleted successfully");

      setTimeout(() => {
        location.reload();
      }, 1000);
    })
  }

  render() {
    return (
      <div className="modal fade" id={"deleteModal"+this.props.modalId} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Employee Details</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              Are you sure?
            </div>
            <div className="modal-footer">
              <button type="button" 
                className="btn btn-danger" 
                data-bs-dismiss="modal"
                onClick={() =>{this.deleteEmployeeData(this.props.modalId)}}
              >
                Yes
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
    )
  }
}

export default DeleteModal