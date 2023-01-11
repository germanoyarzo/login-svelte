<script>
    import { Router, Link, Route, navigate } from "svelte-routing"
	import Login from "./Login.svelte"
	import Home from "./Home.svelte"

    let user = null
    var previousPath
    $: user
   
    function logout() {
      localStorage.clear()
      user = null
      navigate("/")
	  }
</script>

<style>
    form {
      background: linear-gradient(to right, #a9d39e, #9ed9e4);
      padding: 4px;
      width: 100%;
      height: 90px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      box-shadow: 0px 20px 14px 8px rgba(0, 0, 0, 0.58);
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
   
  </style>
<main>
    <h2 align="center">Welcome</h2>
    <nav>
        <form on:submit={logout}>
            <input type="submit" value="Logout" />
        </form>
        
    </nav>
    
</main>