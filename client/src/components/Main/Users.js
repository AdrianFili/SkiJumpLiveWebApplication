import User from "./User"
function Users(props) {
    
    const users = props.users;
    return (<div><h4>Lista użytkowników:</h4>
        <ul> {users.map((user) => <User key={user._id} value={user._id} user={user} />)} </ul></div>);
}
export default Users
