const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    //deferring the ven so it can be triggered later
    window.deferredPrompt = event;
    //removing the hidden class for the install button
    butInstall.classList.toggle('hidden', false);
});

// TODO: Implement a click event handler on the `butInstall` element
//click event handler for install button
butInstall.addEventListener('click', async () => {
    const promptEvent=window.deferredPrompt;
    if(!promptEvent){
        return;
    }
    //show the install 
    promptEvent.prompt();
    window.deferredPrompt=null;
    butInstall.classList.toggle('hidden', true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    window.defferedPrompt=null;
});
