import { useState } from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import styles from "./style.modules.css"

const Save = () => {
    const [data, setData] = useState({
        pozycja: "",
        belka: "",
        kraj: "",
        nota: "",
        nr_zaownika: "",
        odleglosc: "",
        punkty: "",
        wiatr: "",
        zawodnik: "",
    })
    const [error, setError] = useState("")
    const navigate = useNavigate()
    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const url = "http://localhost:8080/api/users"
            const { data: res } = await axios.post(url, data)
            navigate("//userlist")
            console.log(res.message)
        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                setError(error.response.data.message)
            }
        }
    }
    return (
        <div className={styles.signup_container}>
            <div className={styles.signup_form_container}>
                <div className={styles.right}>
                    <form className={styles.form_container}
                        onSubmit={handleSubmit}>
                        <h1>Dodaj uzyskany wynik skoczka:</h1>
                        <input type="text"
                            placeholder="pozycja"
                            name="pozycja"
                            onChange={handleChange}
                            value={data.firstName}
                            required
                            className={styles.input}
                        />
                        <input
                            type="text"
                            placeholder="belka"
                            name="belka"
                            onChange={handleChange}
                            value={data.lastName}
                            required
                            className={styles.input}
                        />
                        <input
                            type="text"
                            placeholder="kraj"
                            name="kraj"
                            onChange={handleChange}
                            value={data.email}
                            required
                            className={styles.input}
                        />
                        <input
                            type="text"
                            placeholder="nota"
                            name="nota"
                            onChange={handleChange}
                            value={data.password}
                            required
                            className={styles.input}
                        />
                        <input type="text"
                            placeholder="nr_zaownika"
                            name="nr_zaownika"
                            onChange={handleChange}
                            value={data.firstName}
                            required
                            className={styles.input}
                        />
                        <input type="text"
                            placeholder="odleglosc"
                            name="odleglosc"
                            onChange={handleChange}
                            value={data.firstName}
                            required
                            className={styles.input}
                        />
                        <input type="text"
                            placeholder="punkty"
                            name="punkty"
                            onChange={handleChange}
                            value={data.firstName}
                            required
                            className={styles.input}
                        />
                        <input type="text"
                            placeholder="wiatr"
                            name="wiatr"
                            onChange={handleChange}
                            value={data.firstName}
                            required
                            className={styles.input}
                        />
                        <input type="text"
                            placeholder="zawodnik"
                            name="zawodnik"
                            onChange={handleChange}
                            value={data.firstName}
                            required
                            className={styles.input}
                        />
                        {error && <div
                            className={styles.error_msg}>{error}</div>}
                        <button type="submit"
                            className={styles.green_btn}>
                            Dodaj
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default Save