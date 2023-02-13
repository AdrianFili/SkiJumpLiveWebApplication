import Wynik from "./wynik"
import Czy_admin from "./czy_admin"
import { Link, useNavigate } from "react-router-dom"


function Wyniki(props) {
    const Wyniki = props.wynik;
    //const {nowy, UsersSeleted} = this.props
    //const nowy = <UserSeleted UserSeleted={UserSeleted.czyAdmin}/>
    //console.log(props.wynik)
    //console.log(nowy) 
    //nowy(<UsersSeleted />)
    //const [danee, nowy] = useState([])
    return (
        <p> {Wyniki.map((wynik) => <Wynik key={wynik._id} value={wynik._id} wynik={wynik} />)}
        <Link to="/save"><button>dodaj wynik</button></Link>
        <Czy_admin />
        </p>);
}
export default Wyniki


