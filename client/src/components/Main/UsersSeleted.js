import UserSeleted from "./UserSeleted"
function UsersSeleted(props) {
    const UsersSeleted = props.UsersSeleted;
    console.log(props.UsersSeleted)
    return (
        <ul> {UsersSeleted.map((userSeleted) => <UserSeleted key={userSeleted._id} value={userSeleted._id} userSeleted={userSeleted} />)} </ul>);
}
export default UsersSeleted
