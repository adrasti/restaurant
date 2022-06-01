
const LoadReveal = function() {
    function reveal() {
        var reveals = document.querySelectorAll(".revealable");
        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 20;
            if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
            }
        }
    }
    reveal();
    window.addEventListener("scroll", reveal);
}

export {LoadReveal};