import styles from "./styles.module.css"
import { useState } from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import Users from "./Users"
import UsersSeleted from "./UsersSeleted"
import Wyniki from "./wyniki"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from 'react-bootstrap'
import Wyniki_pro from "./wyniki_pro"
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"></link>

var zmienna = true
var zmienna2 = true

const Main = () => {

    const handleGetUsers = async (e) => {
        e.preventDefault()

        const token = localStorage.getItem("token")
        //jeśli jest token w localStorage to:
        if (zmienna) {
            if (token) {
                try {
                    //konfiguracja zapytania asynchronicznego z tokenem w nagłówku:
                    const config = {
                        method: 'get',
                        url: 'http://localhost:8080/api/userlist',
                        headers: { 'Content-Type': 'application/json', 'x-access-token': token }
                    }
                    //wysłanie żądania o dane:
                    const { data: res } = await axios(config)
                    //ustaw dane w komponencie za pomocą hooka useState na listę z danymi przesłanymi
                    //z serwera – jeśli został poprawnie zweryfikowany token
                    ustawDane(res.data) // `res.data` - zawiera sparsowane ciało odpowiedzi (response body)
                    zmienna = false
                } catch (error) {
                    if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                        setError(error.response.data.message)
                        localStorage.removeItem("token")
                        window.location.reload()
                    }
                }
            }
        } else {
            ustawDane([])
            zmienna = true
        }

    }

    const handleLogout = () => {
        localStorage.removeItem("token")
        window.location.reload()
    }

    /*app.get("/delete/:id", (req, res) => {
 Student.findByIdAndRemove(req.params.id, (err, doc) => {
 if (!err) {res.redirect("/list")}else {console.log("Błąd podczas usuwania: " + err)}
 })
}*/
    const handlDelete = async (e) => {
        e.preventDefault()
        const token = localStorage.getItem("token")
        if (window.confirm("Czy na pewno chcesz usunąc konto?") == true) {
            try {
                //konfiguracja zapytania asynchronicznego z tokenem w nagłówku:
                const config = {
                    method: 'get',
                    url: 'http://localhost:8080/api/userlist/delete',
                    headers: { 'Content-Type': 'application/json', 'x-access-token': token }
                }
                //wysłanie żądania o dane:
                await axios(config)
                localStorage.removeItem("token")
                window.location.reload()
            } catch (error) {
                if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                    setError(error.response.data.message)
                    localStorage.removeItem("token")
                    window.location.reload()
                }
            }
        }
        
    }


    const handleDetails = async (e) => {
        e.preventDefault()
        const token = localStorage.getItem("token")
        //jeśli jest token w localStorage to:
        if (zmienna2) {
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
                    ustawDanee(res.data) // `res.data` - zawiera sparsowane ciało odpowiedzi (response body)
                    zmienna2 = false
                } catch (error) {
                    if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                        setError(error.response.data.message)
                        //localStorage.removeItem("token")
                       // window.location.reload()
                    }
                }
            }
        } else {
            ustawDanee([])
            zmienna2 = true
        }
    }

    const handlewynik = async (e) => {
        e.preventDefault()
        const token = localStorage.getItem("token")
        try {
            const config = {
                method: 'get',
                url: 'http://localhost:8080/api/userlist/wyniki',
                headers: { 'Content-Type': 'application/json', 'x-access-token': token }
            }

            //wysłanie żądania o dane:
            const { data: res } = await axios(config)
            //ustaw dane w komponencie za pomocą hooka useState na listę z danymi przesłanymi
            //z serwera – jeśli został poprawnie zweryfikowany token
            //console.log(res.data)
            ustawWynik(res.data) // `res.data` - zawiera sparsowane ciało odpowiedzi (response body)
            //console.log("No ma")
        } catch (error) {
            if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                setError(error.response.data.message)
                //localStorage.removeItem("token")
                // window.location.reload()
            }
        }
    }

    const [dane, ustawDane] = useState([])
    const [danee, ustawDanee] = useState([])
    const [wyniki, ustawWynik] = useState([])
    const [error, setError] = useState("")


    return (
        <div className={styles.main_container}>
            <nav className={styles.navbar}>
            <div class={styles.dropdown}>
                    <button class="glyphicon glyphicon-user" style={{color: "yellow", fontSize: "44px", backgroundColor: "DodgerBlue"}}></button>
                        <div class={styles.dropdown_content}>
                        <a href="/update">Edytuj konto</a>
                        <a onClick={handleLogout}>Wyloguj się</a>
                        <a onClick={handlDelete}>Usuń konto</a>
                    </div>
                </div>
                <Dropdown >
                    <Dropdown.Toggle variant="success" id="dropdown-basic-button"  onClick={handleGetUsers}>
                            Stworzeni użytkownicy
                    </Dropdown.Toggle>
                </Dropdown>

                <Dropdown >
                    <Dropdown.Toggle variant="success" id="dropdown-basic-button" onClick={handleDetails}>
                            Szczegóły konta
                    </Dropdown.Toggle>
                </Dropdown>

                <Dropdown >
                    <Dropdown.Toggle variant="success" id="dropdown-basic-button">
                        <Link to="/wyniki2" className={styles.link}>Tabela wyników</Link>
                    </Dropdown.Toggle>
                </Dropdown>
            </nav>
            <div className={styles.login_container}>
                <div className={styles.login_form_container}>
                    <div className={styles.left}>
                        <Wyniki_pro />
                        {dane.length > 0 ? <Users users={dane} /> : <p></p>}
                        {danee.length > 0 ? <UsersSeleted UsersSeleted={danee} /> : <p></p>}
                        
                        {wyniki.length > 0 ?<Wyniki wynik={wyniki}></Wyniki>: <p></p>}
                    </div>
                </div>
            </div>
        </div>
    )
    /*
                    <Dropdown >
                    <Dropdown.Toggle variant="success" id="dropdown-basic-button">
                        Moje konto
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item ><Link to="/update">Edytuj konto</Link></Dropdown.Item>
                        <Dropdown.Item onClick={handleLogout}>Wyloguj się</Dropdown.Item>
                        <Dropdown.Item onClick={handlDelete}>Usuń konto</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                */
}
export default Main