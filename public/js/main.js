// Get the modal
var modal_reg = document.getElementById('id01');
var modal_auth = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal_reg) {
        modal_reg.style.display = "none";
    }

    if (event.target == modal_auth) {
        modal_auth.style.display = "none";
    }
}