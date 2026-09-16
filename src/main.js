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
// ----------------------------------------
// CHARACTER SELECTION
// ----------------------------------------
// ----------------------------------------
// GRADE SELECTION
// ----------------------------------------

const gradeSelection = document.createElement("div");

gradeSelection.id = "grade-selection";

gradeSelection.innerHTML = `
    <div class="grade-content">

        <h2>PILI OG GRADE</h2>

        <p>Pilia ang grade sa imong karakter.</p>

        <div class="grade-buttons">

            <button data-grade="7">GRADE 7</button>
            <button data-grade="8">GRADE 8</button>
            <button data-grade="9">GRADE 9</button>
            <button data-grade="10">GRADE 10</button>
            <button data-grade="11">GRADE 11</button>
            <button data-grade="12">GRADE 12</button>

        </div>

        <button id="back-to-character">
            BALIK
        </button>

    </div>
`;

gameContainer.appendChild(gradeSelection);


// ----------------------------------------
// OPEN GRADE SELECTION
// ----------------------------------------

function openGradeSelection() {

    characterSelection.classList.remove("visible");

    gradeSelection.classList.add("visible");

}


// ----------------------------------------
// GRADE BUTTONS
// ----------------------------------------

gradeSelection
    .querySelectorAll("[data-grade]")
    .forEach((button) => {

        button.addEventListener("click", () => {

            const grade = button.dataset.grade;

            console.log(`Grade ${grade} selected.`);

        });

    });


// ----------------------------------------
// BACK
// ----------------------------------------

document
    .getElementById("back-to-character")
    .addEventListener("click", () => {

        gradeSelection.classList.remove("visible");

        characterSelection.classList.add("visible");

    });
const characterSelection = document.createElement("div");

characterSelection.id = "character-selection";

characterSelection.innerHTML = `
    <div class="character-content">

        <h2>PILI OG KARAKTER</h2>

        <p class="character-info">
            Pilia ang imong karakter para magsugod.
        </p>

        <div class="character-preview">
            <div class="character-placeholder">
                KARAKTER
            </div>
        </div>

        <div class="character-actions">

    <button id="back-to-menu">
        BALIK
    </button>

    <button id="continue-to-grade">
        PADAYON
    </button>

</div>

    </div>
`;

gameContainer.appendChild(characterSelection);


// ----------------------------------------
// OPEN CHARACTER SELECTION
// ----------------------------------------

function openCharacterSelection() {

    mainMenu.classList.remove("visible");

    characterSelection.classList.add("visible");

}


// ----------------------------------------
// BACK TO MAIN MENU
// ----------------------------------------
document.getElementById("back-to-menu").addEventListener("click", () => {

    characterSelection.classList.remove("visible");

    mainMenu.classList.add("visible");

});


document.getElementById("continue-to-grade").addEventListener("click", () => {

    openGradeSelection();

});
document.getElementById("start-button").addEventListener("click", () => {

    openCharacterSelection();

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
