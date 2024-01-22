//facts
var factsList = document.querySelector(".facts-list");
var factsItems = factsList.querySelectorAll('li');
var factsPosition = factsList.offsetTop;
console.log(factsPosition);

function NumberCounter() {
    factsItems.forEach(function(li) {
        var spanNumber = li.querySelector('span');
        var spanInt = parseInt(spanNumber.innerHTML);
        var count = 0;

        var counterTime = setInterval(function(){
            spanNumber.innerHTML = count.toString();
            count++;
            if (count > spanInt) {
                clearInterval(counterTime);
            }
        }, 25);
    });
}

// tijdlijn
var timeList = document.querySelector(".timeline-list");
var items = timeList.querySelectorAll('li');
var timeBar = document.querySelector(".time-bar");

items.forEach(function(li) {
    var itemBtn = li.querySelector('.btn-time');
    var itemP = li.querySelector('p');
    var itemImg = li.querySelector('img');
    var itemBar = li.querySelector(".time-title .title-bar");

    itemBtn.addEventListener('click', function () {
        var itemPosition = li.offsetTop;
        timeBar.style.height = (itemPosition / 16 + 1.75) + "em";

        // button text
        var btnIcon = itemBtn.querySelector('i');

        if (itemP || itemImg) {
            if (btnIcon.classList.contains("fa-chevron-down")) {
                btnIcon.classList.remove("fa-chevron-down");
                btnIcon.classList.add("fa-xmark");
            }else {
                btnIcon.classList.add("fa-chevron-down");
                btnIcon.classList.remove("fa-xmark");
            }
        }

        //titel bar animatie
        if (itemBar) {
            var barStyle = window.getComputedStyle(itemBar);

            if (barStyle.display === "none") {
                itemBar.style.display = "flex";
            } else {
                itemBar.style.display = "none";
            }

            if (itemBar.classList.contains("keyframe-bar")) {
                itemBar.classList.remove("keyframe-bar");
            }else {
                itemBar.classList.add("keyframe-bar");
            }
        }
        
        // paragraaf animatie
        if (itemP) {
            var pStyle = window.getComputedStyle(itemP);

            if (pStyle.display === "none") {
                itemP.style.display = "block";
            } else {
                itemP.style.display = "none";
            }

            if (itemP.classList.contains("keyframe-fade-slide")) {
                itemP.classList.remove("keyframe-fade-slide");
            }else {
                itemP.classList.add("keyframe-fade-slide");
            }
        }

        // afbeelding animatie
        if (itemImg) {
            var imgStyle = window.getComputedStyle(itemImg);

            if (imgStyle.display === "none") {
                itemImg.style.display = "block";
            } else {
                itemImg.style.display = "none";
            }

            if (itemImg.classList.contains("keyframe-fade-slide-img")) {
                itemImg.classList.remove("keyframe-fade-slide-img");
            }else {
                itemImg.classList.add("keyframe-fade-slide-img");
            }
        }
    });
});

// intersection observer
const observer = new IntersectionObserver(entries => {
    NumberCounter();
})

observer.observe(document.getElementById("facts-list"));