<script lang="ts">
    import axios from "axios"

	let email = '';
	let username = '';
	let password = '';
	let confirmedPassword = '';
	let phone = '';
	$: loading = false;
	$: passwordMatch = password == confirmedPassword;

	const register = async()=>{
        loading = true
        const postData = {
            email: email,
            password: password
        }
        const registrationResponse = await axios.post(
            "http://localhost:3000/auth/register",
            postData
        ).then(
            response=> response.data
        )
        console.log(registrationResponse)

    };
</script>

<div class=" flex justify-center h-screen bg-green-300 pt-5">
	<div class="flex flex-col ">
		<p class=" text-center text-3xl my-3 ">Bienvenue à eAssiganmé</p>
		<div>
			<div class=" flex flex-col space-y-5">
				<input
					bind:value={username}
					class=" lg:w-96 md:w-96 rounded p-2 w-72 placeholder:text-sm focus:outline-none"
					type="text"
					placeholder="Nom d'utilisateur"
				/>
				<input
					bind:value={email}
					class=" lg:w-96 md:w-96 rounded p-2 w-72 placeholder:text-sm focus:outline-none"
					type="text"
					placeholder="Adresse email"
				/>
				<input
					bind:value={phone}
					class=" lg:w-96 md:w-96 rounded p-2 w-72 placeholder:text-sm focus:outline-none"
					type="text"
					placeholder="Numero de telephone"
				/>
				<input
					bind:value={password}
					class=" lg:w-96 md:w-96 rounded p-2 w-72 placeholder:text-sm focus:outline-none"
					type="password"
					placeholder="Mot de passe"
				/>
				<input
					bind:value={confirmedPassword}
					class=" lg:w-96 md:w-96 rounded p-2 w-72 placeholder:text-sm focus:outline-none"
					type="password"
					placeholder="Confirmer mot de passe"
				/>
				{#if !passwordMatch}
					<span class="text-sm text-red-500">Les mots de passe ne sont pas identiques</span>
				{/if}
				<button
                    on:click="{register}"
					class=" rounded bg-yellow-300 h-10 hover:cursor-pointer"
				>
					{#if loading}
						<p class=" text-2xl font-bold animate-bounce" >.</p>
					{:else}
						<p>Creer mon compte</p>
					{/if}
				</button>
			</div>
		</div>
	</div>
</div>
