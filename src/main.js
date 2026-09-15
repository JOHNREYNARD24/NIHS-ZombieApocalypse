// ========================================
// NIHS ZOMBIE APOCALYPSE
// STEP 3 - INTRO SYSTEM
// ========================================

const game = {
    currentLevel: 1,
    currentRoom: 1,
    running: false
};


// ----------------------------------------
// INTRO
// ----------------------------------------

const introImages = [
    "assets/intro/intro-1.png",
    "assets/intro/intro-2.png",
    "assets/intro/intro-3.png"
];

let currentIntro = 0;

const gameContainer = document.getElementById("game");


// Create intro screen
const introScreen = document.createElement("div");
introScreen.id = "intro-screen";

gameContainer.appendChild(introScreen);


// Create the three images
const imageElements = introImages.map((src, index) => {

    const image = document.createElement("img");

    image.src = src;
    image.className = "intro-image";

    image.id = `intro-image-${index + 1}`;

    image.alt = `NIHS Intro ${index + 1}`;

    introScreen.appendChild(image);

    return image;
});


// Create main menu
const mainMenu = document.createElement("div");

mainMenu.id = "main-menu";

mainMenu.innerHTML = `
    <div class="menu-title">
        NIHS ZOMBIE APOCALYPSE
    </div>
`;

gameContainer.appendChild(mainMenu);


// ----------------------------------------
// SHOW INTRO IMAGE
// ----------------------------------------

function showIntroImage(index) {

    imageElements.forEach((image) => {
        image.classList.remove("active");
    });

    imageElements[index].classList.add("active");
}


// ----------------------------------------
// START INTRO
// ----------------------------------------

function startIntro() {

    currentIntro = 0;

    showIntroImage(currentIntro);

    setTimeout(() => {

        currentIntro = 1;

        showIntroImage(currentIntro);

    }, 2000);


    setTimeout(() => {

        currentIntro = 2;

        showIntroImage(currentIntro);

    }, 4000);


    // Pagkatapos ng 3rd image,
    // papunta sa main menu.
    setTimeout(() => {

        finishIntro();

    }, 8000);
}


// ----------------------------------------
// FINISH INTRO
// ----------------------------------------

function finishIntro() {

    introScreen.style.transition = "opacity 1s ease-in-out";
    introScreen.style.opacity = "0";

    setTimeout(() => {

        introScreen.remove();

        mainMenu.classList.add("visible");

        game.running = true;

        console.log("Intro finished.");

    }, 1000);
}


// ----------------------------------------
// START GAME
// ----------------------------------------

window.addEventListener("load", () => {

    startIntro();

});
