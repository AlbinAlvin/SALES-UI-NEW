import React, { useEffect } from "react";

const Sales=(props:any)=>{

    //useEffect(() => {console.log('hello')},[]);
    return(
        <div className="dashboard_main">
        <div className="container-fluid">
            <div className="page_header"> 
                <h1 className="page-title m-0">Sales Form</h1> 
            <ol className="breadcrumb"> 
                <li className="breadcrumb-item">
                <a href="javascript:void(0);">Home</a></li> 
                <li className="breadcrumb-item active">Sales Form</li>
            </ol> 
            </div>
    {/* <!--------------------------------------------------------------------------------->
    <!------------------------------Product Form--------------------------------------->
    <!---------------------------------------------------------------------------------> */}
            <div className="card">
                <div className="card-body">
                    <form action="#">
                        <div className="row">
                            <div className="col-md-4 mb-2">
                                <label>Name</label>
                                <input type="text" className="form-control" placeholder="Name"/>
                            </div>
                            <div className="col-md-4 mb-2">
                                <label>Address</label>
                                <textarea className="form-control"  placeholder="Address"></textarea>
                            </div>
                            <div className="col-md-4 mb-2">
                            <label>Contact Number</label>
                                <input type="text" className="form-control" placeholder="Contact Number"/>
                            </div>
                        </div>

                        <div className="table-responsive mt-4">
                <table className="table table-bordered table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Type</th>
                      <th scope="col">Product</th>
                      <th scope="col">Model</th>
                      <th scope="col">IMEI</th>
                      <th scope="col">Qty</th>
                      <th scope="col">GST</th>
                      <th scope="col">SGST</th>
                      <th scope="col">Purchase Amout</th>
                      <th scope="col">Sale Amout</th>
                      <th scope="col">Discount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td scope="row"><select className="form-control">
                                <option value={1}>Product</option>
                                <option value={2}>Accessories</option>
                           </select></td>
                      <td><select className="form-control">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                           </select></td>
                      <td><select className="form-control">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                           </select></td>
                      <td><input type="text" className="form-control" placeholder="IMEI"/></td>
                      <td><input type="text" className="form-control" placeholder="Quantity"/></td>
                  <td><input type="text" className="form-control" placeholder="GST"/></td>
                  <td><input type="text" className="form-control" placeholder="SGST"/></td>
                  <td><input type="text" className="form-control" placeholder="Purchase Amt"/></td>
                  <td><input type="text" className="form-control" placeholder="Sale Amount"/></td>
                  <td><input type="text" className="form-control" placeholder="Discount"/></td>
                    </tr>
                  </tbody>
                </table>
              </div>
                    </form>
                </div>
                <div className="card-footer text-end py-1">
                    <button type="button" className="btn btn-success">Save</button>
                    <button type="button" className="btn btn-secondary">Cancel</button>
                </div>
            </div>
           
        </div>
    </div>
    
    )
    }
    
    export default Sales;
    
    