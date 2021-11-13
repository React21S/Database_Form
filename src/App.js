
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import {db} from "./firebase.config-2";
import {collection, getDocs, addDoc, doc, updateDoc, deleteDoc} from "firebase/firestore";

function App() {

  const [users, setUsers] = useState([]);
  const [firstName, setFirstName]= useState("");
  const [lastName, setLastName]= useState("");
  const [Address, setAddress]= useState("");
  const [postCode, setPostCode]= useState("");
  const [phone, setPhone]= useState("");
  const [Email, setEmail]= useState("");
  const [newAge, setNewAge]= useState(0);

  const usersCollectionRef = collection(db,"users");

// Create new users function 
  const createUser = async()=>{
    await addDoc(usersCollectionRef, {firstName:firstName, lastName:lastName, Address:Address, postCode:Number(postCode), phone:phone, Email:Email,age:Number(newAge)});
  }

  // Create update users function
  const updateUser = async (id, age) => {
      const userDoc = doc(db, "users", id);
      const newFields = { age: age + 1 };
      await updateDoc(userDoc, newFields);
  };

  // Create delete users function 
   const deleteUser = async (id) => {
      const userDoc = doc(db, "users", id);
      await deleteDoc(userDoc);
    };


    // use effect function 
  useEffect(()=>{
    const getUsers = async ()=>{
     const data = await getDocs(usersCollectionRef);
     setUsers(data.docs.map((doc)=>({ ...doc.data(), id: doc.id})));
    };
    getUsers();
  }, []);
  
  return (
    <div className="App">
   
        <Header/>
      {/*input new  users function  */}
      <div>
        <label htmlFor="firstName"> First Name</label>
        <input name="" placeholder="First Name..." onChange={(event)=>{
          setFirstName(event.target.value)
        }}/>
      </div>
      <div>
         <label htmlFor="lastName"> Last Name</label>
         <input name="lastName"placeholder="Last Name..." onChange={(event)=>{
          setLastName(event.target.value)
        }}/>
      </div>
      <div>
        <label htmlFor="address">Address</label>
          <input name="address" placeholder="Address..." onChange={(event)=>{
          setAddress(event.target.value)
        }}/>
      </div>
      <div>
        <label htmlFor="postcode"> Post Code</label>
         <input type="number" name="postcode" placeholder="Post code..." onChange={(event)=>{
          setPostCode(event.target.value)
        }}/>
      </div>
      <div>
        <label htmlFor="phoneNumber"> Phone Number</label>
          <input name="phoneNumber" placeholder="Phone number..." onChange={(event)=>{
          setPhone(event.target.value)
        }}/>
      </div>
      <div>
        <label htmlFor="Email"> Email</label>
          <input name="Email" placeholder="Email..." onChange={(event)=>{
          setEmail(event.target.value)
        }}/>
      </div>
      <div>
        <label htmlFor="age">Age</label>
        <input type="number"name="age" placeholder="Age..."  onChange={(event)=>{
          setNewAge(event.target.value)
        }}/>
      </div>
      

        <button onClick={createUser}>create-User</button>
        {users.map((user)=>{return <div className="result">
          {" "}
          <div className="data"> 
          <h1>First Name: <span>{user.firstName} </span></h1>
          <h1>Last Name: <span>{user.lastName} </span></h1>
          <h1>Address: <span>{user.Address}</span> </h1>
          <h1>Post Code:<span> {user.postCode}</span> </h1>
          <h1>Phone Number:<span> {user.phone} </span></h1>
          <h1>Email: <span>{user.Email} </span></h1>
          <h1>Age:<span> {user.age} </span></h1>
       
          </div>

          {/* update users button   */} 
        <button onClick={() => { updateUser(user.id, user.age,user.Address,user.postCode, user.phone, user.Email );}}>{" "}Increase Age</button>

            {/* delete users button   */} 
        <button onClick={() => {deleteUser(user.id);}}>{" "}Delete User</button>

   </div>})}
 <Footer/>
    </div>
  );
}

export default App;
