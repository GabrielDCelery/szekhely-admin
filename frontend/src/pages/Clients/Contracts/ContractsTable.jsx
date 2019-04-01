import React, { Component } from 'react';
import 'react-datepicker/dist/react-datepicker.css';

export class ContractsTable extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="card shadow-sm">
          <div className="card-header text-center text-light bg-teal-gradient border-bottom-5 border-black">
            <h5>Contracts</h5>
          </div>

          <div className="card-body border-bottom-2">
            <table className="table table-sm table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Client Name</th>
                  <th scope="col">Client Signatory Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Contract Expiry Date</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Live</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Terminated</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry the Bird</td>
                  <td>@twitter</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>Live</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="card-footer">
            <ul className="pagination justify-content-end">
              <li className="page-item disabled">
                <a className="page-link" href="#" tabIndex="-1">Previous</a>
              </li>
              <li className="page-item"><a className="page-link" href="#">1</a></li>
              <li className="page-item"><a className="page-link" href="#">2</a></li>
              <li className="page-item"><a className="page-link" href="#">3</a></li>
              <li className="page-item">
                <a className="page-link" href="#">Next</a>
              </li>
            </ul>
          </div>

        </div>
      </React.Fragment>
    );
  }
}