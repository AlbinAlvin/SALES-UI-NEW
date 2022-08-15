const Alert =(props: any) =>{
    return(<>
    <div className="modal_alert">
        <div className="inner_alert">
            <div className="modal_head">
                <span>This is Heading</span>
                <span className="modal_close"><i className="far fa-window-close"></i></span>
            </div>
            <div className="modal_body">
                This is alert Message
            </div>
            <div className="modal_footer text-end">
                <button type="button" className="btn btn-danger">No</button>
                <button type="button" className="btn btn-success">Yes</button>
            </div>
        </div>
    </div>
    </>)
}

export default Alert;