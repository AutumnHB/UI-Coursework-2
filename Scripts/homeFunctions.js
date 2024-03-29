function search() {
    // This would be replaced with an actual function that would search the database
    var input = document.querySelector('input[type="text"]').value;
    if (input === "") {
        // If the search bar is empty, it will redirect to the main page with all entries
        window.location.href = "home.html";
    } else {
        // If the search bar has a value, it will redirect to the fake search page
        window.location.href = "homeSearchSimulation.html";
    }
}

function filter() {
    document.getElementById("filter").classList.toggle("show");
}

function sort() {
    document.getElementById("sort").classList.toggle("show");
}

window.onclick = function(event) {
    if(!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;for(i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if(openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}