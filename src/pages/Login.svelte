<script>
  import {Link} from "svelte-routing"
  import { auth } from "../firebase";
  import { signInWithEmailAndPassword } from "firebase/auth";
  import { navigate } from "svelte-routing";
  import Notificacion from "./Notification.svelte";
  
  let credentials = {
    email: "",
    password: "",
  };
  let messageNotification = "";
  let showNotification = false;
  
  const showMessage = (message) => {
    messageNotification = message;
    showNotification = true;
    setTimeout(() => {
      showNotification = false;
    }, 2800);
  };
  const changeUser = (e) => {
    credentials = {
      ...credentials,
      [e.target.name]: e.target.value,
    };
  };
  const loginUser = async () => {
    try {
      await signInWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      );
      navigate("/home");
    } catch (error) {
      if (error.message === "Firebase: Error (auth/wrong-password).") {
        showMessage("Password Incorrect")
      }
    }
  };
</script>

<div class="login">
  <Notificacion message={messageNotification} show={showNotification}/>
  <br /><br /><br />
  <div class="form-signin">
    <h1 class="text-center">👤</h1>
    <div class="center">
      <input
        name="email"
        type="text"
        class="input-form"
        placeholder="Correo"
        on:input={(e) => changeUser(e)}
      />
    </div>
    <div class="center">
      <input
        name="password"
        type="password"
        class="input-form"
        placeholder="Contraseña"
        on:input={(e) => changeUser(e)}
      />
    </div>
    <br />
    <div class="center">
      <button class="button-signup fondo-color-signup" on:click={loginUser}>
        Log in
      </button>
    </div>
    <br />
    <Link to="/register">Register</Link>
  </div>
</div>

<style>
  .login {
   background: rgb(156, 200, 207);
   padding: 50px;
   width: 250px;
   height: 500px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   box-shadow: 0px 20px 14px 8px rgba(0, 0, 0, 0.58);
 }
 label {
   margin: 10px 0;
   align-self: flex-start;
   font-weight: 500;
 }
 input {
   border: none;
   border-bottom: 1px solid #ccc;
   margin-bottom: 20px;
   transition: all 300ms ease-in-out;
   width: 100%;
 }
 input:focus {
   outline: 0;
   border-bottom: 1px solid #666;
 }
 button {
   margin-top: 20px;
   background: black;
   color: white;
   padding: 10px 0;
   width: 200px;
   border-radius: 25px;
   text-transform: uppercase;
   font-weight: bold;
   cursor: pointer;
   transition: all 300ms ease-in-out;
 }
 button:hover {
   transform: translateY(-2.5px);
   box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.58);
 }
 h1 {
   margin: 10px 20px 30px 20px;
   font-size: 40px;
 }
 .errors {
   list-style-type: none;
   padding: 10px;
   margin: 0;
   border: 2px solid #be6283;
   color: #be6283;
   background: rgba(190, 98, 131, 0.3);
 }
 .success {
   font-size: 24px;
   text-align: center;
 }
</style>
