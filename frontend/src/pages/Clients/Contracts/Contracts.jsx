import React, { Component } from 'react';
import { connect } from 'react-redux';
import { capitalizedLabels } from 'state/selectors';

class Contracts extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container mw-100">
          <div className="row">
            <div className="col-md-9">

              <div className="card shadow-sm">
                <div className="card-header text-center text-light bg-teal-gradient border-bottom-5 border-black">
                  <h5>Contracts</h5>
                </div>

                <div className="card-body border-bottom-2">
                  <table className="table table-sm table-striped">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
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



            </div>

            <div className="col-md-3">
              <div className="card shadow-sm mb-2">
                <div className="card-header text-center text-light bg-teal-gradient border-bottom-5 border-black">
                  Saved Views
                </div>
                <div className="card-body">
                  <div className="form-group">
                    <select className="form-control" id="exampleFormControlSelect1">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                  <button type="button" className="btn btn-primary btn-block">Remove View</button>
                  <button type="button" className="btn btn-primary btn-block">Save View</button>
                </div>
              </div>

              <div className="card shadow-sm mb-2">
                <div className="card-header text-center text-light bg-teal-gradient border-bottom-5 border-black">
                  Search
                </div>
                <div className="card-body">
                  test
								</div>
              </div>

              <div className="card shadow-sm mb-2">
                <div className="card-header text-center text-light bg-teal-gradient border-bottom-5 border-black">
                  Fields
                </div>
                <div className="card-body">
                  test
								</div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    capitalizedLabels: capitalizedLabels(state)
  }
}

const mapActionsToProps = {
};

const connected = connect(mapStateToProps, mapActionsToProps)(Contracts);

export { connected as Contracts };