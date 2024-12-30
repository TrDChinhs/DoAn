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

let currentIndex = 0;
const ITEMS_PER_PAGE = 6;
let allNews = [];

fetch('../Data/news.json')
    .then(response => response.json())
    .then(data => {
        allNews = data;
    })
    .catch(error => console.error('Error loading news:', error));

function showNews() {
    const moreNewsContainer = document.getElementById('more-news');
    const newsToShow = allNews.slice(currentIndex, currentIndex + ITEMS_PER_PAGE);
    
    if (newsToShow.length === 0) {
        document.getElementById('load-more').style.display = 'none';
        return;
    }

    const fragment = document.createDocumentFragment();

    newsToShow.forEach(news => {
        const newArticle = document.createElement('div');
        newArticle.classList.add('col-12', 'col-xl-4', 'p-0');
        newArticle.innerHTML = `
            <a href="#">
                <div class="image-container">
                    <img src="${news.image}" alt="${news.title}">
                </div>
                <div class="container-text-box">
                    <p><span class="container-title">${news.title}</span><span> | ${news.date}</span></p>
                    <p>${news.description}</p>
                    <p style="font-weight: normal;">${news.details}</p>
                </div>
            </a>
        `;
        fragment.appendChild(newArticle); 
    });

    moreNewsContainer.appendChild(fragment);
    
    currentIndex += ITEMS_PER_PAGE;
}

document.getElementById('load-more').addEventListener('click', showNews);
