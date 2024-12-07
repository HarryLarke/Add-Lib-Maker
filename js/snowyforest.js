console.log("Active")

const textCommand = document.getElementById("inputCommand");
const formDisplay = document.getElementById("inputBox")
const mainTitle = document.getElementById("mainTitle");
const storyTitle = document.getElementById("storyTitle");

const addButtonOne = document.getElementById("taskButtonOne");
const addButtonTwo = document.getElementById("taskButtonTwo");
const addButtonThree = document.getElementById("taskButtonThree");
const addButtonFour = document.getElementById("taskButtonFour");
const addButtonFive = document.getElementById("taskButtonFive");



textCommand.innerText = "adjective";

formDisplay.addEventListener("keydown", (e) => {
    if (e.keyIdentifier == 'U+000A' || e.keyIdentifier == 'Enter' || e.keyCode == 13) {
        if (e.target.nodeName == 'INPUT' && e.target.type == 'text') {
            e.preventDefault();
            console.log("enter!");


            return false;
            /* add event that cause the add button to move!  */
            /*  attempted above but it just keep repeating animation when proceeding to next event - could make it simpler!? Maybe add an arrow? */
        }
    }
}, true);

/*copied and pasted this code above, should learn how this works! */

adjOneGetter();

function adjOneGetter() {
    textCommand.innerText = "adjective";
    const rawInputText = document.getElementById("adjOne");
    const button = document.getElementById("taskButtonOne");


    button.addEventListener("click", (eve) => {
        eve.preventDefault();

        if (!rawInputText.value) {
            textCommand.innerText = "adjective please!";
        }
        else {
            const text = rawInputText.value;
            const adjOne = text.trim();
            console.log(adjOne); /* might have to stringify or make onjectivfy value? Could capitalise and underline here? */
            rawInputText.style.display = "none";
            button.style.display = "none";
            nOneGetter();
            return adjOne
        }
    })
}



function nOneGetter() {
    textCommand.innerText = "noun";
    const rawInputText = document.getElementById("nOne");
    const button = document.getElementById("taskButtonTwo");
    rawInputText.style.display = "flex";
    button.style.display = "flex";

    button.addEventListener("click", (eve) => {
        eve.preventDefault();

        if (!rawInputText.value) {
            textCommand.innerText = "noun please!";
        }
        else {
            const textTrim = rawInputText.value.trim();
            const nOne = textTrim.charAt(0).toUpperCase() + textTrim.slice(1);
            console.log(nOne);
            rawInputText.style.display = "none";
            button.style.display = "none";
            nTwoGetter();
            return nOne
        }
    })
}


function nTwoGetter() {
    textCommand.innerText = "another noun";
    const rawInputText = document.getElementById("nTwo");
    const button = document.getElementById("taskButtonThree");
    rawInputText.style.display = "flex";
    button.style.display = "flex";



    button.addEventListener("click", (eve) => {
        eve.preventDefault();

        if (!rawInputText.value) {
            textCommand.innerText = "noun please!";
        }
        else {
            const textTrim = rawInputText.value.trim();
            const nTwo = textTrim.charAt(0).toUpperCase() + textTrim.slice(1);
            console.log(nTwo);
            rawInputText.style.display = "none";
            button.style.display = "none";
            nThreeGetter();
            return nTwo
        }
    })

}


function nThreeGetter() {
    textCommand.innerText = "a third noun";
    const rawInputText = document.getElementById("nThree");
    const button = document.getElementById("taskButtonFour");
    rawInputText.style.display = "flex";
    button.style.display = "flex";

    button.addEventListener("click", (eve) => {
        eve.preventDefault();

        if (!rawInputText.value) {
            textCommand.innerText = "noun please!";
        }
        else {
            const nThree = rawInputText.value.trim();
            console.log(nThree);
            rawInputText.style.display = "none";
            button.style.display = "none";
            adjTwoGetter();
            return nThree
        }
    })

}


function adjTwoGetter() {
    textCommand.innerText = "adjective";
    const rawInputText = document.getElementById("adjTwo");
    const button = document.getElementById("taskButtonFive");
    rawInputText.style.display = "flex";
    button.style.display = "flex";

    button.addEventListener("click", (eve) => {
        eve.preventDefault();

        if (!rawInputText.value) {
            textCommand.innerText = "adjective please!";
        }

        else {
            const adjTwo = rawInputText.value.trim();
            console.log(adjTwo);
            rawInputText.style.display = "none";
            button.style.display = "none";
            console.log("Finished - start class")
            maker();
            return adjTwo
        }
    })

}


function maker() {


    class SnowyForest {
        constructor(adjOne, nOne, nTwo, nThree, adjTwo) {
            this.adjectiveOne = adjOne
            this.nounOne = nOne
            this.nounTwo = nTwo
            this.nounThree = nThree
            this.adjectiveTwo = adjTwo
        }


        story() {
            console.log(`On the West of Scotland is a ${this.adjectiveOne} and snowy forest. This wood is called ${this.nounOne} Forest. Every year in mid-winter a festival for ${this.nounTwo} is held. Despite the cold and snow, people burn ${this.nounThree} to keep themselves warm during the ${this.adjectiveTwo} festivities.`)


            /*   formDisplay.insertAdjacentHTML("beforeend", `<p class="story" id="story">On the West of Scotland is a <u>${this.adjectiveOne}</u> and snowy forest. This wood is called <u>${this.nounOne}</u> Forest. Every year in mid-winter a festival for <u>${this.nounTwo}</u> is held. Despite the cold and snow, people burn <u>${this.nounThree}</u> to keep themselves warm during the <u>${this.nounTwo}</u> festivities.</p>`) */

            const textBox = document.getElementById("story");
            textBox.style.display = "flex";
            textCommand.style.display = "none";
            mainTitle.style.display = "none";
            storyTitle.style.display = "flex";

            textBox.style.display = "flex";

            textBox.innerText = `On the West of Scotland is a ${this.adjectiveOne} and snowy forest. This wood is called ${this.nounOne} Forest. Every year in mid-winter a festival for ${this.nounTwo} is held. Despite the cold and snow, people burn ${this.nounThree} to keep themselves warm during the ${this.adjectiveTwo} festivities.`;


        }

    }

    const inputSnowyForest = new SnowyForest(adjOne.value, nOne.value, nTwo.value, nThree.value, adjTwo.value);
    inputSnowyForest.story()

}

/* Still having issues get automated capitlised letter to go through the class maybe try using regex? */