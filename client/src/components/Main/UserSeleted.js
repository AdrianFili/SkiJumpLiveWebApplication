const UserSeleted = (props) => {
    const userSeleted = props.userSeleted;
    return ( 
    <div> 
        <table> 
            <tr><h1>Szczegóły konta:</h1> </tr>
            <tr><td>Id użytkownika:</td><td>{userSeleted._id}</td></tr>
            <tr><td>Imię:</td><td>{userSeleted.firstName}</td></tr>
            <tr><td>Nazwisko:</td><td>{userSeleted.lastName}</td></tr>
            <tr><td>Email:</td><td>{userSeleted.email}</td></tr>
            <tr><td>Uprawnienia administratora:</td><td>{userSeleted.czyAdmin}</td></tr>
        </table>
    </div>);
}
export default UserSeleted