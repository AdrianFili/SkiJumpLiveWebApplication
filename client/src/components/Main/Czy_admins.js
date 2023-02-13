import Edycja from "./Edycja"
import { Link, useNavigate } from "react-router-dom"
import Save from "./save_score"
import { DropdownButton, Dropdown} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';

const Czy_admins = (props) => {
    const czy_admins = props.czy_admins;
    console.log(czy_admins.czyAdmin)
    useEffect(()=>{
    if(czy_admins.czyAdmin == "true"){
        window.location = "/save"
    }else{
        window.alert("Tylko administrator może edytować tabelę!")
    }
})
}
export default Czy_admins

