// animation cijfers & facts
function FactsList() {
    var parent = document.getElementById("facts-list");
    var child = parent.getElementsByTagName("li");
    var rect = parent.getBoundingClientRect();
    var viewportHeight = window.innerHeight;

    if (rect < viewportHeight) {
        for (var i = 0; i < child.length; i++) {
            var childpos = child[i].getBoundingClientRect().top;
            if (childpos < window.innerHeight) {
                child[i].classList.toggle("facts-slide");
            }
        }
    }
}

window.addEventListener("scroll", FactsList());

// tijdlijn
var timeList = document.querySelector(".timeline-list");
var timeItem = timeList.getElementsByTagName('li');
var ItemH2 = timeList.getElementsByTagName('h2');
var ItemSpan = timeList.getElementsByTagName('span');

ItemH2.addEventListener("click", function(){
    ItemSpan[2];
});
