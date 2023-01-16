<script>
    import { navigate } from "svelte-routing";
    import { auth } from "../firebase";
    import {Link} from "svelte-routing"
    import { createUserWithEmailAndPassword } from "firebase/auth";
    
 
    
   // const navigate = useNavigate();
    
    let credentials = {
      email: "",
      password: "",
    };
    
    const changeUser = (e) => {
      credentials = {
        ...credentials,
        [e.target.name]: e.target.value,
      };
    };
    
    const loginUser = async () => {
      try {
        await createUserWithEmailAndPassword(
          auth,
          credentials.email,
          credentials.password
        );
        navigate("/home")
        
      } catch (error) {
        console.log(error);
        alert(error)
      }
    };
    console.log("debug")
  </script>
  <div>
    <br /><br /><br />
    <div class="form-signin">
      <h1 class="text-center text-login">Register</h1>
      <div class="center">
        <input
          name="email"
          type="email"
          class="input-form"
          placeholder="Email"
          required
          on:input={(e) => changeUser(e)}
        />
      </div>
      <div class="center">
        <input
          name="password"
          type="password"
          class="input-form"
          placeholder="Password"
          on:input={(e) => changeUser(e)}
        />
      </div>
      <br />
      <div class="center">
        <button class="button-signup fondo-color-signup" on:click={loginUser}> Create the account </button>
      </div>
      
      <br />
      <p class="text-center">
        Do you have an account ? <Link to="/">Log in</Link>
      </p>
    </div>
  </div>

  
  <style>
   
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
