<script>
    import { createEventDispatcher } from "svelte";
    import {Link} from "svelte-routing"
    import { navigate } from "svelte-navigator";
    import users from '../Data/File.json';
    import userss from '../store/users.js'

    

    
    let name="";
    let cellphone ="";
    let email = "";
    let password = "";
    let isLoading = false;
    let isSuccess = false;
    let errors = {};
    
    
    const dispatch = createEventDispatcher()

    

  
    const handleSubmit = () => {

      errors = {};
      if (email.length === 0) {
        errors.email = "Field should not be empty";
      }
      if (password.length === 0) {
        errors.password = "Field should not be empty";
      }
    
      if (Object.keys(errors).length === 0) {
        isLoading = true;
        
        users.forEach(element => {

          if(email===element.email && password===element.password){
            submit({ name,email, password,cellphone })
            .then(() => {
                isSuccess = true;
                isLoading = false;
                
            })
            .catch(err => {
                errors.server = err;
                isLoading = false;
            });
        }else{
            console.log("usuario incorrecto")
        }
        });

        
      }
    };

    
    function submit() {
        dispatch("registerIn", true)
        navigate('/home');
    }
    </script>
<style>
    form {
      background: rgb(156, 200, 207);
      padding: 50px;
      width: 300px;
      height: 650px;
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
      border-bottom: 1px solid #666;
      background: rgb(156, 200, 207);
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
  
  <form on:submit|preventDefault={handleSubmit}>

      <h1>👤</h1>
      <h2>Sign up</h2>
      <label>Name</label>
      <input name="name" placeholder="name" bind:value={name} required/>  

      <label>Email</label>
      <input name="email" placeholder="name@example.com" bind:value={email} required/>
  
      <label>Password</label>
      <input name="password" type="password" bind:value={password} required/>
    
      <label>Cellphone</label>
      <input name="cellphone" placeholder="22351111" bind:value={cellphone} required/>
  
      <button on:click={changeData}>
        {#if isLoading}Something is Wrong!{:else}Register{/if}
      </button>
      <Link to="/">Cancel</Link>
  
      {#if Object.keys(errors).length > 0}
        <ul class="errors">
          {#each Object.keys(errors) as field}
            <li>{field}: {errors[field]}</li>
          {/each}
        </ul>
      {/if}

  </form>
    
