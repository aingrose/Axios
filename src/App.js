import './App.css';
import Card from './Card';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import Input from './Input';
import { v4 as uuidv4 } from 'uuid';
import { Alert } from 'bootstrap';

const API = 'https://65c9ee2f3b05d29307df498b.mockapi.io/cart/userData'


function App() {

  let [data, newdata] = useState([]);
 let[editmode,seteditmode] = useState(false)
  

  let [name, setname] = useState("");
  let [email, setemail] = useState("");
  let [city, setcity] = useState("");
  let [phone, setphone] = useState("")
  let [website, setwebsite] = useState("");
  const [editingUserId, setEditingUserId] = useState(null); 



  useEffect(() => {
    fetchdata()
  }, [])


  let fetchdata = async () => {
    try {
      let response = await axios.get(API);
      newdata(response.data)
    }
    catch (error) {
      console.log(error)
    }
  }


    {data.map(user=>console.log(user))}

  let createNewUser = async () => {
    try {

      let newUser = {
        id: uuidv4(),
        name: name,
        email: email,
        phone: phone,
        address: {
          city: city,
        },
        website: website,
      }
      console.log(newUser)
     
      let newone = await axios.post(API, newUser);
      let updatedUser = newone.data;
      newdata([...data, updatedUser]);
      console.log(updatedUser)

    } catch (err) {
      console.log(err)
    }

  }


  let deleteUser = async (id) => {
    try {
     
      await axios.delete(`${API}/${id}`);
      let updatedData = data.filter(user => user.id !== id)
      newdata(updatedData)
      alert("deleted")
    }

    catch (err) {
      console.log(err)
    }



  }
   
  
  const handleEditUser = (user) => {
    
    seteditmode(true);
    setEditingUserId(user.id);
    setname(user.name);
    setemail(user.email);
    setcity(user.address.city);
    setphone(user.phone);
    setwebsite(user.website);

    console.log(name)
  };


  
  
  

  const handleUpdateUser = async (id) => {
    try {
      let updatedUser = {
        name,
        email,
        phone,
        address: {
          city,
        },
        website,
      };
    

      console.log(id)
      await axios.put(`${API}/${id}`, updatedUser);
      
      const updatedData = data.map((user) =>
        user.id === id ? { ...user, ...updatedUser } : user,
        console.log(id)
      );
    
      newdata(updatedData);
     
      seteditmode(false);
      setEditingUserId(null);
      alert('user is updated')
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='container mt-3'>
      <div className='row'>
        <h1 className='mb-4' style={{ textAlign: "center" }}>User Management</h1>

        <Input setname={setname} setemail={setemail} setcity={setcity} setphone={setphone} setwebsite={setwebsite} name={name} email={email} city={city} phone={phone} website={website} submit={createNewUser}  editmode={editmode}  handleUpdateUser={()=> handleUpdateUser(editingUserId)}  editingUserId={editingUserId} data={data} />
        
        {data.map((user) => {
          return <Card user={user}
            deleteuser={deleteUser} edit={()=>handleEditUser(user)}
          />
        })}

      </div>
    </div>
  )
}


export default App;











// function App() {
//   const [users, setUsers] = useState([]);
//   const [newUser, setNewUser] = useState({ name: '', email: '', phone: '' });

//   useEffect(() => {
//     fetchData();
//   }, [])

//   const fetchData = async () => {
//     try {
//       const response = await axios.get(API_URL);
//       setUsers(response.data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   }

//   const handleAddUser = async () => {
//     try {
//       await axios.post(API_URL, newUser);
//       fetchData();
//       setNewUser({ name: '', email: '', phone: '' });
//     } catch (error) {
//       console.error('Error adding user:', error);
//     }
//   };

//   const handleEditUser = async (id, updatedUser) => {
//     try {
//       await axios.put(`${API_URL}/${id}`, updatedUser);
//       fetchData();
//     } catch (error) {
//       console.error('Error updating user:', error);
//     }
//   };

//   const handleDeleteUser = async (id) => {
//     try {
//       await axios.delete(`${API_URL}/${id}`);
//       fetchData();
//     } catch (error) {
//       console.error('Error deleting user:', error);
//     }
//   };
//   return (
//     <>
//     <div className="App">
//      <h1>hello</h1>
//     </div>
//     <div>
//     <h1>User Management</h1>
// <Card></Card>
//     {/* Add User Form */}
//     <div>
//       <h2>Add User</h2>
//       <input
//         type="text"
//         placeholder="Name"
//         value={newUser.name}
//         onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
//       />
//       <input
//         type="text"
//         placeholder="Email"
//         value={newUser.email}
//         onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
//       />
//       <input
//         type="text"
//         placeholder="Phone"
//         value={newUser.phone}
//         onChange={(e) => setNewUser({ ...newUser, phone: e.target.value })}
//       />
//       <button onClick={handleAddUser}>Add User</button>
//     </div>

//     {/* Display Users */}
//     <div>
//       <h2>Users</h2>
//       <ul>
//         {users.map((user) => (
//           <li key={user.id}>
//             {user.name} - {user.email} - {user.phone}
//             <button onClick={() => handleEditUser(user.id, { name: 'Updated Name' })}>Edit</button>
//             <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   </div>
//     </>
//   );
// }

// export default App;
