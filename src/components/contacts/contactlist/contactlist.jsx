import Addcontact from "../addcontact/addcontact";
import Contact from "./contact";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { mycontext } from "../../../context";
import React from "react";

let Contactlist =() =>{


    const {dt,setdt,search,setsearch} = useContext(mycontext);
    const deleter = (id)=>{
        setdt((dt.filter((e)=>e.id !== id)));
    }

    
    return(
        <React.Fragment>
            <section className="contact-search p-3">
                <div className="container">
                    <div className="grid">
                        <div className="row">
                            <div className="col">
                            <p className="h3 fw-bold">
                                contact manager
                                <Link to={'/contacts/add'}className="btn btn-primary ms-2">
                                    <i className="fa fa-plus-circle me-2"/>
                                    NEW</Link>
                            </p>
                            <p className="fst-italic">this page use to manage contacts :D</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <form className="row">
                                    <div className="col">
                                        <div className="mb-2">
                                            <input type="text" className="form-control" placeholder="search city" onChange={(e)=>setsearch(e.target.value.toLowerCase())} value={search} />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="mb-2">
                                            {/* <input type="submit" className="btn btn-outline-dark" value="search" /> */}
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact-list">
                <div className="container">
                    <div className="row">
                        {
                            dt.map(
                                (e)=>{
                                if (e.city.toLowerCase().includes(search)){
                                    return (
                                    <div className="col-md-6" key={e.id}>
                                        <Contact name={e.nom} phone={e.num} city={e.city} del={()=>deleter(e.id)}/>
                                    </div>
                                    )
                                }
                                return <></>

                                }
                                )
                        }
                        
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
};
export default Contactlist;