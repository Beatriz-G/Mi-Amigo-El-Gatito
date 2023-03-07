var button = document.querySelector(".show-cat");
//console.log(button);
var cat = document.querySelector(".cat");
//console.log(cat);

button.addEventListener("click", function() {
    //console.log("Its working!");
    cat.classList.add("show");
});