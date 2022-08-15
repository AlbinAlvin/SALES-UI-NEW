import { type } from "@testing-library/user-event/dist/type";
import { typeImplementation } from "@testing-library/user-event/dist/type/typeImplementation";
import { isVisible } from "@testing-library/user-event/dist/utils";
import axios from "axios";
import { useEffect, useState } from "react"


const Purchase = (props: any) => {
    const [issetproduct,setproduct] =useState(false)
    const [ispurchase,setPurchase] =useState(false)
    const [isLength,setLenght] = useState(0)
    const getLenthe = () =>{
        setLenght(isLength)
    }
useEffect(() =>{
    if(isLength >= 5){
        const mytable = document.getElementById("myTable");
        mytable?.classList.add('show')
    }
    else if(isLength<=5){
        const mytable = document.getElementById("myTable");
        mytable?.classList.remove('show')
    }
    if(isLength == 5){
        const mytable = document.getElementById("myTable")?.getElementsByTagName('tbody');
        // const aa = mytable?.clientHeight()
    } 
})

    // const toggleAccordian= () =>{
    //     setToggle(true)
    // }
    const inputProduct ={
        Type: Number,
        Product: Number,
        Model: Number,
        Color: String,
        BatteryNumber: String,
        SerialNumber: String,
        IMEI: String,
        Quantity: Number,
        GST: Number,
        SGST: Number,
        PurchaseAmount: Number,
        SaleAmount: Number,
        Discount: Number,
    };
    
    interface inputData {
        Name: String,
        Address: String,
        Invoice: String,
        productDetails: any[]
    };
     const inputPurchaseProducts:any[] = [];
    // const inputDatas: inputData={
    //     Name :'',
    //     Address: '',
    //     Invoice: '',
    //     productDetails: inputPurchaseProducts
    // }
    const productDetailsData: any ={
        Index:0,
        Type: '',
        Product: '',
        Model: '',
        Color: '',
        BatteryNumber: '',
        SerialNumber: '',
        IMEI: '',
        Quantity: '',
        GST: '',
        SGST: '',
        PurchaseAmount: '',
        SaleAmount: '',
        Discount: '', 
        products:[],
        modelDatas:[],
    }
    const [products, setProducts] = useState([]);
    const [productDatadetails, setProductDetails] = useState([]);
    const [models, setModel] = useState([]);
    const [productId,setid] =useState(0);
    const [product, setProduct] = useState({
        Name :'',
        Address: '',
        Invoice: '',
        productDetails: inputPurchaseProducts
    });
    const handleToggle =(type:any) =>{
        if(type === 'p'){
            setproduct(false)
            setPurchase(true)
        }
        else if(type === 's'){
            setproduct(true)
            setPurchase(false)
        }
    }
   const getModel =(productId: number, models: any[], index: number) =>{
    axios('https://localhost:7247/api/product/getModelByProductId/'+productId,{
        method: 'GET',
        //mode: 'no-cors',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        }}).then((response: any) =>{ 
        setModel(response.data) ;
        var resData:[] = response.data;
        resData.map(m=> 
        product.productDetails[index].modelDatas.push(m)
        );
        setProducts({...product.productDetails[index], modelDatas: product.productDetails[index].modelDatas });
        }
        );
   }

   const getProducts =(id: number, models: any[], index: number) =>{
    axios('https://localhost:7247/api/product/getProductsByTypeId/'+id,{
        method: 'GET',
        //mode: 'no-cors',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        }}).then((response: any) =>{ 
        setModel(response.data) ;
        var resData:[] = response.data;
        resData.map(m=> 
        product.productDetails[index].products.push(m)
        );
        setProducts({...product.productDetails[index], products: product.productDetails[index].products });
        }
        );
   }
    const AddNewRow = () => {
      var length =   product.productDetails.length;
        if(length > 0 && product.productDetails[product.productDetails.length-1].Index == length)
        {
        productDetailsData.Index=length+1;
        }
        else{
            productDetailsData.Index=length;
        }
        product.productDetails.push(productDetailsData);
        setProduct({...product, productDetails : product.productDetails.sort((a: any,b: any) => a - b)})
        setLenght(length +1)
        
        var setHeight = length +1;
    }
    const deleteRow = (data: any, datas: any[]) =>{
        var length =   product.productDetails.length;
       var filterdataHaving =  datas.filter(f=> f.Index == data.Index);
       var filterdata =  datas.filter(f=> f.Index != data.Index);
        product['productDetails'] = filterdata;
        setProduct({...product,  ['productDetails']:filterdata})
        setLenght(length -1)
    }

    const update=(e: any) =>{
       setProduct({...product, [e.target.name]: e.target.value });
    }

    const updateRow =(index: any,data: any,e: any) => {
        var i = product?.productDetails?.find((f: any) => f.Index == data.Index)?.Index;
        data[e.target.name] = e.target.value;
        if(i !=undefined)
        product.productDetails[i] = data;
        if(e.target.name =='Product')
        {
            setid(e.target.value);
            getModel(e.target.value,product.productDetails,i);
        }
        else if(e.target.name =='Type')
        {
            setid(e.target.value);
            getProducts(e.target.value,product.productDetails,i);
        }

        setProducts({...product.productDetails[i], data});
    }
    
    const bindRow = () => {
        return product.productDetails.map((m: any, i: Number) => 
        {
          return  <tr id={'row_'+i}>
            <td scope="row"  className="sl">{i}</td>
                <td scope="row"><select id={'type_'+i} name='Type'  onChange={(event:any) => updateRow(i, m,event)} className="form-control">
                <option value={0}>--Select--</option>
                    <option value={1}>Product</option>
                    <option value={2}>Accessories</option>
                </select></td>
                <td><select id={'product'+i} name='Product'  onChange={(event:any) => updateRow(i, m,event)} className="form-control"  >
                <option value={0}>--Select--</option>
                {
                    m.products.map((p: any) => {
                 return  <option value={p.id}>{p.name}</option>
                })
            }
                </select></td>
                <td><select id={'model'+i} name='Model'   onChange={(event:any) => updateRow(i, m,event)} className="form-control">
                <option value={0}>--Select--</option>
                {
                    m.modelDatas.map((p: any) => {
                 return  <option value={p.id}>{p.name}</option>
                })
            }
                </select></td>
                <td><input type="text" id={'color'+i} name='Color'  onChange={(event:any) => updateRow(i, m,event)} className="form-control" placeholder="Color" /></td>
                <td><input type="text" id={'batteryNumber'+i} name='BatteryNumber'   onChange={(event:any) => updateRow(i, m,event)} className="form-control" placeholder="Battery Num" /></td>
                <td><input type="text" id={'serialNumber'+i} name='SerialNumber'   onChange={(event:any) => updateRow(i, m,event)} className="form-control" placeholder="Serial Num" /></td>
                <td><input type="text" id={'imei'+i} name='IMEI'  onChange={(event:any) => updateRow(i, m,event)} className="form-control" placeholder="IMEI" /></td>
                <td><input type="text" id={'quantity'+i} name='Quantity'  onChange={(event:any) => updateRow(i, m,event)} className="form-control" placeholder="Quantity" /></td>
                <td><input type="text" id={'gst'+i} name='GST'  onChange={(event:any) => updateRow(i, m,event)} className="form-control" placeholder="GST" /></td>
                <td><input type="text" id={'sgst'+i} name='SGST'   onChange={(event:any) => updateRow(i, m,event)} className="form-control" placeholder="SGST" /></td>
                <td><input type="text" id={'purchaseAmount'+i} name='PurchaseAmount' onChange={(event:any) => updateRow(i, m,event)} className="form-control" placeholder="Purchase Amt" /></td>
                <td><input type="text" id={'saleAmount'+i} name='SaleAmount' onChange={(event:any) => updateRow(i, m,event)} className="form-control" placeholder="Sale Amount" /></td>
                <td><input type="text" id={'discount'+i} name='Discount'  onChange={(event:any) => updateRow(i, m,event)} className="form-control" placeholder="Discount" /></td>
                <td>
                    <button type="button" className="btn btn-secondary" onClick={(event: any) => deleteRow(m, product.productDetails)}>Delete</button></td>
            </tr>
        })
    }
    return (
        <div className="dashboard_main">
            <div className="container-fluid">
                <div className="page_header">
                    <h1 className="page-title m-0">Purchase Form</h1>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="javascript:void(0);">Home</a></li>
                        <li className="breadcrumb-item active">Purchase Form</li>
                    </ol>
                </div>
{/* <!--------------------------------------------------------------------------------->
<!------------------------------Product Form--------------------------------------->
<!---------------------------------------------------------------------------------> */}
                <div className="card">
                    <div className="card-body">
                        <form action="#">
                        <div className="form_accordian">
                                <div className="accordian_header d-flex align-items-center"onClick={() => handleToggle('s')}>
                                    <h3 className="mb-0">Accordian</h3>
                                    {issetproduct ? <span className="ms-auto"><i className="fas fa-angle-up"></i></span> : <span className="ms-auto"><i className="fas fa-angle-down"></i></span>}
                                </div>
                                {issetproduct ?
                                <div className="accordian_body">
                                <div className="row">
                                <div className="col-md-4 mb-2">
                                    <label>Name</label>
                                    <input type="text"  name='Name' onChange={update} className="form-control" placeholder="Name" />
                                </div>

                                <div className="col-md-4 mb-2">
                                    <label>Address</label>
                                    <textarea value={product.Address} name='Address'  onChange={update} className="form-control" placeholder="Address" rows={1}></textarea>
                                </div>
                                <div className="col-md-4 mb-2">
                                    <label>Invoice Number</label>
                                    <input type="text" value={product.Invoice} name='Invoice'  onChange={update} className="form-control" placeholder="Invoice" />
                                </div>                                
                            </div>
                                </div>
                                :
                                ''
                    }
                            </div>
                            <div className="form_accordian">
                                <div className="accordian_header d-flex align-items-center"onClick={() => handleToggle('p')}>
                                    <h3 className="mb-0">Accordian</h3>
                                    {ispurchase ? <span className="ms-auto"><i className="fas fa-angle-up"></i></span> : <span className="ms-auto"><i className="fas fa-angle-down"></i></span>}
                                </div>
                                {ispurchase ?
                                <div className="accordian_body">
                                <div className="row">
                                <div className="col-md-4 mb-2">
                                    <label>Name</label>
                                    <input type="text"  name='Name' onChange={update} className="form-control" placeholder="Name" />
                                </div>

                                <div className="col-md-4 mb-2">
                                    <label>Address</label>
                                    <textarea value={product.Address} name='Address'  onChange={update} className="form-control" placeholder="Address" rows={1}></textarea>
                                </div>
                                <div className="col-md-4 mb-2">
                                    <label>Invoice Number</label>
                                    <input type="text" value={product.Invoice} name='Invoice'  onChange={update} className="form-control" placeholder="Invoice" />
                                </div>
                                
                            </div>
                                </div>
                                :
                                ''
                    }
                            </div>
                            
                            <div className="table-responsive custom_height" id="myTable">
                                    <table className="table table-bordered table-striped">
                                        <thead>
                                            <tr>
                                            <th scope="col" className="sl">Sl No.</th>
                                                <th scope="col">Type</th>
                                                <th scope="col">Product</th>
                                                <th scope="col">Sub Cateagory</th>
                                                <th scope="col">Color</th>
                                                <th scope="col">Battery Number</th>
                                                <th scope="col">Serial Num</th>
                                                <th scope="col">IMEI</th>
                                                <th scope="col">Quantity</th>
                                                <th scope="col">GST</th>
                                                <th scope="col">SGST</th>
                                                <th scope="col">Purchase Amount</th>
                                                <th scope="col">Sale Amount</th>
                                                <th scope="col">Discount</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                bindRow()
                                            }
                                        </tbody>
                                    </table>
                                </div>
                                <div className="text-end">
                                    <button type="button" className="btn btn-success"disabled={isLength === 10}  onClick={AddNewRow}>New Row</button>
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

export default Purchase;

