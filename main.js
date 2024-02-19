if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("/sw.js")
      .then(function (registration) {
        console.log(`Registrado com sucesso, escopo é: ${registration.scope}`);
      })
      .catch(function (err) {
        console.log(`Registro falhou, erro: ${err}`);
      });
  }

  function installApp() {
	// Show the prompt
	deferredPrompt.prompt();
	setupButton.disabled = true;
	// Wait for the user to respond to the prompt
	deferredPrompt.userChoice.then((choiceResult) => {
		if (choiceResult.outcome === "accepted") {
			console.log("PWA setup accepted");
			// hide our user interface that shows our A2HS button
			setupButton.style.display = "none";
		} else {
			console.log("PWA setup rejected");
			setupButton.style.display = "inline";
			setupButton.disable = false;
		}
		deferredPrompt = null;
	});
}