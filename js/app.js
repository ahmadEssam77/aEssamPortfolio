// const getTheBody = document.getElementById("getBody");
const homePage = document.getElementById("home"); // Select home page
const aboutPage = document.getElementById("about"); // Select about page
const aboutMeBtn = document.querySelector(".about-me-btn");  // Select about me btn
const closeBtn = document.querySelector(".close-modal");  // Select the close sign in modal

// Display any page none. Then show it again by slideDown jquery effect
// homePage.style.display = "none";
//$("#home").slideDown(850);       // this effect influnce or override over the about effect, I don't know why, will figure that out
// aboutPage.style.display = "none";
// $("#about").slideDown(500);
let getTheTitle;
let changeTitle;
let newTitle;
// About Me button function, to display about info
$("#portfolio .my-projects .layer").click(function(e) {
    $(".parent-modal").show(300);
    $(".my-modal").show(300);
    getTheTitle = e.target.getAttribute('value');
    changeTitle = $(".my-modal h2");
    newTitle = changeTitle.html(getTheTitle);
});

function showTheModal() {
    $(".parent-modal").show(300);
    $(".my-modal").show(300);
}

// aboutMeBtn.addEventListener("click", function () {
//     $(".parent-modal").show(300);
//     $(".my-modal").show(300);
// });

function closeTheModal() {
    $(".parent-modal").hide(200);
    $(".my-modal").hide(200);
}

// closeBtn.addEventListener("click", function () {
//     $(".parent-modal").hide(200);
//     $(".my-modal").hide(200);
// });

// Prgressbar function for all
function progressBarForAll(changeID, time) {
    var bar = new ProgressBar.Circle(changeID, {
        color: '#fff',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 10,
        trailWidth: 10,
        easing: 'easeInOut',
        duration: 1400,
        text: {
            autoStyleContainer: false
        },
        from: { color: '#FFB400', width: 10 },  //252525
        to: { color: '#FFB400', width: 10 },   // ffb400
        // Set default step function for all animate calls
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText('');
            } else {
                circle.setText(value);
            }

        }
    });
    bar.text.style.fontFamily = "'Poppins', sans-serif;";
    bar.text.style.fontSize = '1.5rem';

    bar.animate(time);  // Number from 0.0 to 1.0
}

progressBarForAll(htmlProgress, 0.98);
progressBarForAll(cssProgress, 0.96);
progressBarForAll(bootProgress, 0.97);
progressBarForAll(jsProgress, 0.89);
progressBarForAll(jqProgress, 0.97);
progressBarForAll(angularProgress, 0.80);
progressBarForAll(sassProgress, 0.85);
progressBarForAll(gitProgress, 0.96);

