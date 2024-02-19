import axios from "axios"

const saveUserToDB = (user) => {
    axios.post("http://localhost:9000/api/user", user);
}


export default saveUserToDB;