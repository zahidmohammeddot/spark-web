const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if(navLinks.classList.contains("active")){
        menuToggle.style.display = "none";
    }
});

// ================= topic-search-section =================

function searchTopics() {

    let input = document.getElementById("topicSearch");
    let filter = input.value.toLowerCase();

    let cards = document.getElementsByClassName("topic-card");

    for (let i = 0; i < cards.length; i++) {

        let text = cards[i].textContent.toLowerCase();

        if (text.includes(filter)) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
}

// ================= video-search-section =================


// function searchVideos() {

//     let input = document.getElementById("topicSearch");
//     let filter = input.value.toLowerCase();

//     let videos = document.getElementsByClassName("subject-video-card");

//     for (let i = 0; i < videos.length; i++) {

//         let title = videos[i].textContent.toLowerCase();

//         if (title.includes(filter)) {
//             videos[i].style.display = "";
//         } else {
//             videos[i].style.display = "none";
//         }
//     }
// }



// Back To Top Button

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function(){

    if(window.scrollY > 300){
        backToTop.style.display = "block";
    }
    else{
        backToTop.style.display = "none";
    }

});

backToTop.addEventListener("click", function(){

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});

