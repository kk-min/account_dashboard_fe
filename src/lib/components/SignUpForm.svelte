<script lang="ts">
	import { isValidAccountId } from "$lib/utils/validation";
	import { goto } from "$app/navigation";

	let accountId: string = $state("");
	let password: string = $state("");
	let confirmPassword: string = $state("");
	let errorMessage: string = $state("");
	let showError: boolean = $state(false);

	function signup() {
		if (
			accountId === "" ||
			password === "" ||
			confirmPassword === ""
		) {
			errorMessage = "Account ID and password are required!";
			showError = true;
			return;
		}
		if (!isValidAccountId(accountId)) {
			errorMessage = "Account ID must be a number!";
			showError = true;
			return;
		}
		if (password !== confirmPassword) {
			errorMessage = "Passwords do not match!";
			showError = true;
			return;
		}
		// Perform signup via backend API

		// On success, redirect to login page
	}
</script>

<div class="page-container">
	<h1>Sign Up</h1>
	<div class="sub-container">
		<div class="grid-item">Account ID:</div>
		<div><input type="text" bind:value={accountId} required /></div>
		<div class="grid-item">Password:</div>
		<div>
			<input type="password" bind:value={password} required />
		</div>
		<div class="grid-item">Confirm Password:</div>
		<div>
			<input
				type="password"
				bind:value={confirmPassword}
				required
			/>
		</div>
	</div>
	<button class="signup" onclick={signup}>Register</button>
	{#if showError}
		<div class="error-message">
			{errorMessage}
		</div>
	{/if}
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
		position: relative;
		flex-direction: column;
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
	.signup {
		background-color: var(--color-highlight);
		color: white;
		border: none;
		padding: 0.5rem 1rem;
		font-size: 1rem;
		border-radius: 0.25rem;
		cursor: pointer;
	}
	.signup:hover {
		filter: brightness(0.9);
	}
	.error-message {
		position: absolute;
		color: var(--color-error);
		bottom: 20vh;
	}
</style>
