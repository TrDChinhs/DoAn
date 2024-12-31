function toggleMenu() {
    const playBtn = document.getElementById('playBtn');
            
    if (sidebar.style.right === '0px') {
        sidebar.style.right = '-100vw'; 
    } else {
        sidebar.style.right = '0px';    
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
    const modal = document.getElementById("loginModal");
    modal.classList.add("show"); 
});

window.addEventListener("click", function (event) {
    const modal = document.getElementById("loginModal");
    if (event.target === modal) {
        modal.classList.remove("show");
    }
});

document.getElementById("loginBtn").addEventListener("click", function () {
    alert("Đăng nhập thành công!");
    const modal = document.getElementById("loginModal");
    modal.classList.remove("show"); 
});


const swiper = new Swiper('.swiper', {
    slidesPerView: 3, 
    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination', 
        clickable: true,
    },
    slideToClickedSlide: true,
    breakpoints: {
        1200: { 
            slidesPerView: 3,
        },
        0: { 
            slidesPerView: 1,
        },
    },
});
