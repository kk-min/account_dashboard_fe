<script lang="ts">
	import { goto } from "$app/navigation";
	import { isValidAccountId } from "$lib/utils/validation";
	let accountId: string = $state("");
	let password: string = $state("");
	let errorMessage: string = $state("");
	let showError: boolean = $state(false);

	function login() {
		if (accountId === "" || password === "") {
			errorMessage = "Account ID and password is required!";
			showError = true;
			return;
		}
		if (!isValidAccountId(accountId)) {
			errorMessage = "Account ID must be a number!";
			showError = true;
			return;
		}
		goto("/account");
	}
</script>

<div class="page-container">
	<h1>Sign in</h1>
	<div class="sub-container">
		<div class="grid-item">Account ID:</div>
		<div><input type="text" bind:value={accountId} required /></div>
		<div class="grid-item">Password:</div>
		<div>
			<input type="password" bind:value={password} required />
		</div>
	</div>
	<button
		class="login"
		onclick={() => {
			login();
		}}>Login</button
	>
	{#if showError}
		<div class="error-message">
			{errorMessage}
		</div>
	{/if}
	<div class="grid-item">
		New here? <a href="/signup">Create an account</a>
	</div>
</div>

<style>
	h1 {
		color: var(--color-highlight);
	}
	input {
		border: 2px solid;
	}
	input:invalid {
		border: 2px solid var(--color-error);
	}
	.page-container {
		display: flex;
		flex-direction: column;
		position: relative;
		justify-content: center;
		align-items: center;
		height: 85vh;
		gap: 1.5rem;
	}
	.sub-container {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 0.5rem 1rem;
		justify-content: center;
		align-items: center;
	}
	.error-message {
		position: absolute;
		color: var(--color-error);
		bottom: 20vh;
	}
	.grid-item {
		justify-self: center;
	}
	.login {
		background-color: var(--color-highlight);
		color: white;
		border: none;
		padding: 0.5rem 1rem;
		font-size: 1rem;
		border-radius: 0.25rem;
		cursor: pointer;
	}
	.login:hover {
		filter: brightness(0.9);
	}
</style>
