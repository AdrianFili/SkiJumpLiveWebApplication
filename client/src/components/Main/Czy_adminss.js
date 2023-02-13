import Czy_admins from "./Czy_admins"
function Czy_adminss(props) {
    const Czy_adminss = props.Czy_adminss;
    return (
        <ul> {Czy_adminss.map((czy_admins) => <Czy_admins key={czy_admins._id} value={czy_admins._id} czy_admins={czy_admins} />)} </ul>);
}
export default Czy_adminss


