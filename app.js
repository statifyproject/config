function copyStringToClipboard (str) {
    // Create new element
    var el = document.createElement('textarea');
    // Set value (string to be copied)
    el.value = str;
    // Set non-editable to avoid focus and move outside of view
    el.setAttribute('readonly', '');
    el.style = {position: 'absolute', left: '-9999px'};
    document.body.appendChild(el);
    // Select text inside element
    el.select();
    // Copy text to clipboard
    document.execCommand('copy');
    // Remove temporary element
    document.body.removeChild(el);
}

function sendForm() {
    const sel = document.getElementById('platform');
    const usr = document.getElementById('username').value;
    const obj = sel.options[sel.selectedIndex];
    if (obj.text === "Select Platform") {
        swal("Something is off...", "You have to select platform...", "error");
        return;
    }
    const fixed = obj.text.replace('D', 'd').replace('T', 't').replace('Y', 'y')
    if (usr === "") {
        swal("Something is off...", "You have to enter username...", "error");
        return;
    }
    copyStringToClipboard(`https://app.statify.live/v1/${fixed}/${usr}`);
    swal("Ayyy!", "Copied link to Clipboard, paste it to OBS", "success");
}