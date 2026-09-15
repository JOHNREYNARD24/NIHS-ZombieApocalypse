// ========================================
// NIHS ZOMBIE APOCALYPSE
// STEP 4.1 - MAIN MENU
// ========================================

const game = {
    currentLevel: 1,
    currentRoom: 1,
    running: false
};


// ----------------------------------------
// GAME CONTAINER
// ----------------------------------------

const gameContainer = document.getElementById("game");


// ----------------------------------------
// INTRO
// ----------------------------------------

const introImages = [
    "assets/intro/intro-1.png",
    "assets/intro/intro-2.png",
    "assets/intro/intro-3.png"
];

let currentIntro = 0;

const introScreen = document.createElement("div");
introScreen.id = "intro-screen";

gameContainer.appendChild(introScreen);


// Create intro images
const imageElements = introImages.map((src, index) => {

    const image = document.createElement("img");

    image.src = src;
    image.className = "intro-image";
    image.id = `intro-image-${index + 1}`;
    image.alt = `NIHS Intro ${index + 1}`;

    introScreen.appendChild(image);

    return image;
});


// ----------------------------------------
// MAIN MENU
// ----------------------------------------

const mainMenu = document.createElement("div");

mainMenu.id = "main-menu";

mainMenu.innerHTML = `
    <div class="menu-content">

        <h1>NIHS ZOMBIE APOCALYPSE</h1>

        <div class="menu-buttons">

            <button id="start-button">
                SUGDI
            </button>

            <button id="shop-button">
                TINDAHAN
            </button>

            <button id="settings-button">
                SETTINGS
            </button>

        </div>

    </div>
`;

gameContainer.appendChild(mainMenu);


// ----------------------------------------
// INTRO IMAGE
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

        console.log("Main menu ready.");

    }, 1000);
}


// ----------------------------------------
// BUTTONS
// ----------------------------------------

document.getElementById("start-button").addEventListener("click", () => {

    console.log("SUGDI clicked.");

});


document.getElementById("shop-button").addEventListener("click", () => {

    console.log("TINDAHAN clicked.");

});


document.getElementById("settings-button").addEventListener("click", () => {

    console.log("SETTINGS clicked.");

});


// ----------------------------------------
// START
// ----------------------------------------

window.addEventListener("load", () => {

    startIntro();

});
