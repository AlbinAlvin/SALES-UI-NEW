import './Header.scss'

const Header =() =>{

    return(<>
    <div className="header">
  <a href="#default" className="logo">CompanyLogo</a>
  <div className="header-right">
  <a href="/Dashboard">Home</a>

    <a href="/Purchase">Purchase</a>
    <a href="/Sales">Sales</a>
    <a href="/Product">Product</a>
    <a href="/SubProduct">Sub Product</a>
  </div>
</div>
    </>)
}

export default Header;