import React from "react";
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import Contactlist from "../contactlist/contactlist";
import { useContext } from "react";
import { mycontext } from "../../../context";
import {v4} from "uuid"

let Addcontact =() =>{
    const {dt,setdt} = useContext(mycontext);
        const [addnom,addnomset]=useState("");
        const [addnum,addnumset]=useState("");
        const [addcity,addcityset]=useState("");
        const [redirect,setredirect]=useState(<></>);


        const add=()=>{
            let newdt = [...dt];
            let newt = {};
            newt.id = v4();
            newt.nom = addnom;
            newt.num = addnum;
            newt.city = addcity;
            newdt.push(newt);
            setdt(newdt.sort((a, b) => a.nom.toLowerCase() > b.nom.toLowerCase() ? 1 : -1));
            addnomset("");
            addnumset("");
            addcityset("");
            setredirect(<Navigate to={"/"}/>)
            
        }
    










    
    return(
        <React.Fragment>
            <section className="add-contact p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h4 text-success fw-bold">Create Contact</p>
                            <p className="fst-italic">Add information please</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                                <div className="mb-2">
                                    <input type="text" className="form-control" placeholder="Name" value={addnom} onChange={(e)=>{addnomset(e.target.value)}}/>
                                </div>
                                <div className="mb-2">
                                    <input type="number" className="form-control" placeholder="Phone" value={addnum} onChange={(e)=>{addnumset(e.target.value)}} />
                                </div>
                                <div className="mb-2">
                                    <input type="text" className="form-control" placeholder="City" value={addcity} onChange={(e)=>{addcityset(e.target.value)}} />
                                </div>
                                <div className="mb-2">
                                    <input type="button" className="btn btn-success" value='Create' onClick={add}/>
                                    <Link to={"/contacts/list"} className='btn btn-dark ms-2'>Cancel</Link>
                                </div>
                        </div>
                    </div>
                </div>
                {redirect}
            </section>
        </React.Fragment>
    )
};
export default Addcontact;