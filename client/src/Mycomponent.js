import { useContext } from "react";
import {Mycontext} from "./Mycontext";

export default function Mycomponent(){
    //consumer
    const {text,setText} = useContext(Mycontext)
    return(
        <div>
            <h1>{text}</h1>
            <button className="text-3xl text-yellow-50" onClick={()=>setText("Hello World")}>click</button>
        </div>
    )
}