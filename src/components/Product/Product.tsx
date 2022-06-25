import axios from "axios";
import { useEffect, useState } from "react";
import { setConstantValue } from "typescript";

const Product = (props: any) => {

  const productModel = {
    id:null,
    Name: '',
    Code: '',
    CatType: 0,
    Description: '',
    BranchId: 1
  }
  const [products, setProducts]: any = useState([]);
  const [product, setProduct]:any = useState({});
  const [saveResponse, setSaveResponse] = useState();
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    getProducts();
  }, [products]);

  const update = (e: any) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  }

  const getProducts = () => {
      axios('https://localhost:7247/api/product/getProduct', {
        method: 'GET',
        //mode: 'no-cors',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        }
      }).then((response: any) => {
        setProducts(response.data)
      })
    }
    const saveProduct = () => {
      if (!isEdit) {
        axios.post('https://localhost:7247/api/product/saveProduct', product)
          .then(response => {
            if (response.data.status == "Success") {
              getProducts();
            }
          });
      }
      else {
        axios.put('https://localhost:7247/api/product/updateProduct/' + product.id, product)
          .then(response => {
            if (response.data.status == "Success") {
              getProducts();
            }
          });
      }
    }
    const deleteRecord = (data: any) => {

    }

    const editRecord = (data: any) => {
      setIsEdit(true);
      setProduct({ Name: 'AAA' });

    }
    const cancel = () => {
    
    }
    return (
      <div className="dashboard_main">
        <div className="container-fluid">
          <div className="page_header">
            <h1 className="page-title m-0">Product</h1>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="javascript:void(0);">Home</a></li>
              <li className="breadcrumb-item active">Product</li>
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
                    <select name="CatType" onChange={update} className="form-control">
                      <option value={0}>--Select--</option>
                      <option value={1}>Product</option>
                      <option value={2}>Accessories</option>
                    </select>
                  </div>
                  <div className="col-md-4 mb-2">
                    <label>Name</label>
                    <input type="text" name="Name"  value={productModel.Name} onChange={update} className="form-control" placeholder="Name" />
                  </div>
                  <div className="col-md-4 mb-2">
                    <label>Code</label>
                    <input type="text" name="Code"  onChange={update} className="form-control" placeholder="Code" />
                  </div>
                  <div className="col-md-4 mb-2">
                    <label>Description</label>
                    <textarea name="Description" onChange={update} className="form-control"></textarea>
                  </div>
                </div>
              </form>
            </div>
            <div className="card-footer text-end py-1">
              <button type="button" onClick={saveProduct} className="btn btn-success">Save</button>
              <button type="button" onClick={cancel} className="btn btn-secondary">Cancel</button>
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
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  products.map((m: any, i: number) => {
                    return <tr>
                      <th scope="row">{i}</th>
                      <td>{m.name}</td>
                      <td>{m.code}</td>
                      <td></td>
                      <td>
                        <button type="button" className="btn btn-secondary" onClick={(event: any) => editRecord(m)}>Edit</button>
                        <button type="button" className="btn btn-secondary" onClick={(event: any) => deleteRecord(m)}>Delete</button>
                      </td>
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

  export default Product;
