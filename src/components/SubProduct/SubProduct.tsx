import axios from "axios";
import { useEffect, useState } from "react";

const SubProduct=(props:any)=>{

  const [models, setModels]:any = useState([]);
  const [products, setProducts]:any = useState([]);
  useEffect(() => {
    axios('https://localhost:7247/api/product/getModel', {
      method: 'GET',
      //mode: 'no-cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      }
    }).then((response: any) => { 
      setModels(response.data)
    })
  }, [models]);

  const getProducts =(id: number) =>{
    axios('https://localhost:7247/api/product/getProductsByTypeId/'+id,{
        method: 'GET',
        //mode: 'no-cors',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        }}).then((response: any) =>{ 
        setProducts(response.data);
        }
        );
   }

  const update=(e: any) =>{
    // setProduct({...product, [e.target.name]: e.target.value });
    if(e.target.name == 'Type')
    {
      getProducts(e.target.value);
    }
    //else if()
 }
    return(
        <div className="dashboard_main">
    <div className="container-fluid">
        <div className="page_header"> 
            <h1 className="page-title m-0">Product</h1> 
        <ol className="breadcrumb"> 
            <li className="breadcrumb-item">
            <a href="javascript:void(0);">Home</a></li> 
            <li className="breadcrumb-item active">Sub Catagory</li>
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
                            <label>Type</label>
                           <select className="form-control"  name='Type' onChange={update}>
                           <option value={0}>--Select--</option>
                    <option value={1}>Product</option>
                    <option value={2}>Accessories</option>
                           </select>
                        </div>
                        <div className="col-md-4 mb-2">
                            <label>Category</label>
                           <select name='product' className="form-control">
                           <option value={0}>--Select--</option>
                                {
                                  products.map((m: any) =>{
                                  return <option value={m.id}>{m.name}</option>
                                })
                              }
                           </select>
                        </div>
                        <div className="col-md-4 mb-2">
                            <label>Name</label>
                            <input type="text" className="form-control" placeholder="Name"/>
                        </div>
                        <div className="col-md-4 mb-2">
                            <label>Code</label>
                            <input type="text" className="form-control" placeholder="Name"/>
                        </div>
                        <div className="col-md-4 mb-2">
                            <label>Description</label>
                            <textarea className="form-control"></textarea>
                        </div>
                        
                    </div>
                </form>
            </div>
            <div className="card-footer text-end py-1">
                <button type="button" className="btn btn-success">Save</button>
                <button type="button" className="btn btn-secondary">Cancel</button>
            </div>
        </div>
        <div className="table-responsive mt-4">
            <table className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th scope="col">Si</th>
                  <th scope="col">Name</th>
                  <th scope="col">Code</th>
                  <th scope="col">Description</th>
                </tr>
              </thead>
              <tbody>
                {
                  models.map((m:any, i: Number)=> {
               return <tr>
                  <th scope="row">{i}</th>
                  <td>{m.name}</td>
                  <td>{m.code}</td>
                  <td></td>
                </tr>
                })
              }
              </tbody>
            </table>
          </div>
    </div>
</div>

    
    )
    }
    
    export default SubProduct;
    
    