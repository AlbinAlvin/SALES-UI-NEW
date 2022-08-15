import { useEffect, useState } from "react";

const Toast =() =>{
    const [state,setState]= useState({type: 'success'})
    const setlaert = () =>{
        setState({ type: 'success' });
        setState({ type: 'error' });
        setState({ type: 'info' });
        setState({ type: 'warning' });
        setState({ type: 'primary' });
    }
    const delay = 3000;
useEffect(() =>{
    const popup = document.getElementById("myPopup");
    popup?.classList.add('show')
    if(popup?.classList.contains('show'))
    setTimeout(() =>
        popup?.classList.remove('show'),delay 
    )
})
    return(<>
    {state?.type ==='success' &&
  <div className="popuptext" id="myPopup">
    <span className="success">Success</span>
  </div>
  }
  {state?.type ==='error' &&
  <div className="popuptext" id="myPopup">
    <span className="error">Error</span>
  </div>
  }
    {state?.type ==='info' &&
  <div className="popuptext" id="myPopup">
    <span className="info">info</span>
  </div>
  }
    {state?.type ==='warning' &&
  <div className="popuptext" id="myPopup">
    <span className="warning">Warning</span>
  </div>
  }
    {state?.type ==='primary' &&
  <div className="popuptext" id="myPopup">
    <span className="primary">Primary</span>
  </div>
  }
    </>)
}

export default Toast;