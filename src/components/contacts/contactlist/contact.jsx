
export default function contact({name,phone,city,del}) {
    return (
            <div className="card">
                <div className="card-body">
                    <div className="row align-items-center d-flex justify-content-around">
                                <div className="col-md-7">
                                    <ul className="list-group">
                                        <li className="list-group-item list-group-item-action">
                                            Name: <span className="fw-bold">{name}</span>
                                        </li>
                                        <li className="list-group-item list-group-item-action">
                                            Phone: <span className="fw-bold">{phone}</span>
                                        </li>
                                        <li className="list-group-item list-group-item-action">
                                            City: <span className="fw-bold">{city}</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-1 d-flex flex-column align-items-center">
                                    <button className="btn btn-danger my-1" onClick={del}><i className="fa fa-trash"/></button>
                                </div>
                        </div>
                    </div>
                </div>
  )
}
