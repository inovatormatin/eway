import UserContext from "./userContext";

const UserState = (props) => {
    const state = {
        name: "Manish",
        class: "5b"
    }
    return(
        <UserContext.Provider value={state}>
            {props.children}
        </UserContext.Provider>
    );
}

export default UserState;