<script>
	import { Router, Link, Route, navigate } from "svelte-routing"
	import Login from "./pages/Login.svelte"
	import Home from "./pages/Home.svelte";
	import users from './Data/File.json';
  	import Register from "./pages/Register.svelte";

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

	  <Route path="/home" component={Home} />
	  <Route path="/" component={Login} />
	  <Route path="/register" component={Register} />

	</main>
</Router>
</section>	
