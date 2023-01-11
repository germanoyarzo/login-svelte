<script>
	import { Router, Link, Route, navigate } from "svelte-routing"
	import Login from "./pages/Login.svelte"
	import Home from "./pages/Home.svelte"
	let user = null
	var previousPath
	$: user


	function loggedIn (event) {
		if (event) {
			user = { email: "germa@gmail.com",
					 password: "1234"	
					}
			navigate("/home")
			console.log(user)
		}
	}
	function loggingIn() {
		previousPath = window.location.pathname
	}

	
	</script>
	 
	 <style>
		section {
		  height: 100vh;
		  width: 100%;
		  display: flex;
		  justify-content: center;
		  align-items: center;
		  background: linear-gradient(to right, #a9d39e, #9ed9e4);
		}
	  </style>
  <section>

  
	<Router>
		<main>
			<Route path="/"><Login on:loggedIn={loggedIn} /></Route>
			{#if user !== null}
			<Route path="/home"><Home /></Route>
			{:else}
			<Route path="/"><Login on:loggedIn={loggedIn} /></Route>
			{/if}
		</main>
	</Router>
</section>	