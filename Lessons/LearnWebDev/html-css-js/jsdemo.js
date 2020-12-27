
document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById('mybutton').onclick = () => {
    // alert("You clicked the button");
    document.getElementById('demo').innerHTML = Date();
  }
});