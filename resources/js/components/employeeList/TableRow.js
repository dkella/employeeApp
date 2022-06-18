import React, { Component } from 'react'
import TableActionButtons from './TableActionButtons'

export class TableRow extends Component {

  constructor(props) {
    super(props)
  
    // this.state = {
    //    first
    // }
  }

  render() {
    return (
        <tr>
          <th>{this.props.data.id}</th>
          <td>{this.props.data.emp_name}</td>
          <td>{this.props.data.salary}</td>
          <td><TableActionButtons eachRowId={this.props.data.id} /></td>
        </tr>
    )
  }
}

export default TableRow