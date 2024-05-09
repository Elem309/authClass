function spinner(element){
    const spin = document.getElementById(element)
    spin.innerHTML = `<span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
    <span role="status">Loading...</span>`
}