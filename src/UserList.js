import React , {useState,useEffect} from 'react'
import Axios   from 'axios'
function UserList() {
    const [listOfUSer, setListOfUSer] = useState([]); 

    useEffect(() => {
       Axios.get('https://jsonplaceholder.typicode.com/users')
       .then((response) =>{
           console.log(response);
           setListOfUSer(response.data)
       })
    }, [])
const showUsers= listOfUSer.map((user) => {

return <div>
<h4  >Name : {user.name} </h4>
<h4  >Username :{ user.username} </h4>
<h4>Email :{ user.email} </h4>
<h4  >Address : { user.address.street} ,{user.address.city},{user.address.zipcode}  </h4>
<h4 >Phone :{ user.phone} </h4>

</div>
}) 
return ( 
    <>
    {listOfUSer && showUsers}
    </>      
)
}
export default UserList