import { useState } from "react"
import Czy_adminss from "./Czy_adminss"
import axios from "axios"
import { DropdownButton, Dropdown} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./styless.module.css"

const Czy_admin = () => {
    const handleDetails = async (e) => {
        e.preventDefault()
        const token = localStorage.getItem("token")
        //jeśli jest token w localStorage to:
            if (token) {
                try {
                    //konfiguracja zapytania asynchronicznego z tokenem w nagłówku:
                    const config = {
                        method: 'get',
                        url: 'http://localhost:8080/api/userlist/detail',
                        headers: { 'Content-Type': 'application/json', 'x-access-token': token }
                    }
                    //wysłanie żądania o dane:
                    const { data: res } = await axios(config)
                    //ustaw dane w komponencie za pomocą hooka useState na listę z danymi przesłanymi
                    //z serwera – jeśli został poprawnie zweryfikowany token
                    ustawDaneeee(res.data) // `res.data` - zawiera sparsowane ciało odpowiedzi (response body)
                } catch (error) {
                    if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                        setError(error.response.data.message)
                        //localStorage.removeItem("token")
                       // window.location.reload()
                    }
                }
            }
        }
        const [danee, ustawDaneeee] = useState([])
        const [error, setError] = useState("")
        console.log(danee)

        return (
            <div>
                <Dropdown >
                    <Dropdown.Toggle variant="success" id="dropdown-basic-button"  onClick={handleDetails}>
                        Dodaj rekord
                    </Dropdown.Toggle>
                </Dropdown>
                {danee.length > 0 ? <Czy_adminss Czy_adminss={danee} /> : <p></p>}
                
            </div>

        )
}
export default Czy_admin