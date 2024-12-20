function toggleMenu() {
    var sidebar = document.getElementById("sidebar");

    if (sidebar.style.right === "0px") {
        sidebar.style.right = "-100vw"; 
    } else {
        sidebar.style.right = "0px";  
    }
}

document.addEventListener("click", function(event) {
    var sidebar = document.getElementById("sidebar");
    var menuIcon = document.querySelector(".menu-icon img");
    var sidebarArea = sidebar.contains(event.target);
    var menuIconArea = document.querySelector(".menu-icon").contains(event.target);

    if (!sidebarArea && !menuIconArea) {
        sidebar.style.right = "-100vw";  
    }
});

        
document.getElementById("playBtn").addEventListener("click", function () {
    document.getElementById("loginModal").style.display = "block";
});

window.addEventListener("click", function (event) {
    const modal = document.getElementById("loginModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

document.getElementById("loginBtn").addEventListener("click", function () {
    alert("Đăng nhập thành công!"); 
    document.getElementById("loginModal").style.display = "none";
});