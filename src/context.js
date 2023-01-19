import { createContext,useState } from "react";
import {v4} from "uuid"


export const mycontext = createContext();

export default function Mycontext({children}) {
    const [dt,setdt]=useState([
        {id:v4(),nom:"joe",num:'12345',city:"london"},
        {id:v4(),nom:"ismontic",num:'2345678',city:"tanger"},
        {id:v4(),nom:"khadija",num:'2345678',city:"zmamra"}
    ].sort((a, b) => a.nom.toLowerCase() > b.nom.toLowerCase() ? 1 : -1) )
    const [search,setsearch] = useState('');
  return (
    <mycontext.Provider value={{dt,setdt,search,setsearch}}>
        {children}
    </mycontext.Provider>
  )
}
