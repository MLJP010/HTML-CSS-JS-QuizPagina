const startBtn = document.getElementById('start-btn');
const startDiv = document.getElementById('start');
const vragenContainer = document.getElementById('parent');
const results = document.getElementById('result');
const vraagInhoud = document.getElementById('vraagVeld');

let naam = document.getElementById('naam');
let shuffledQuestions, currentQuestionIndex

//quiz start functie

startBtn.addEventListener('click', startQuiz)

function startQuiz() {
    document.getElementById('naamOutput').innerHTML = "bedankt " + naam.value + " voor het spelen van onze quiz";
    startDiv.classList.add('hide')
    shuffledQuestions = vragen.sort(() => Math.random() - .10)
    currentQuestionIndex = 0
    vragenContainer.classList.remove('hide')

    volgendeVraag()
}

//quiz start functie end

//kleur overlay functie

function turn(color) {
    let overlay = document.createElement('div');
    overlay.id = 'overlay';
    overlay.style.backgroundColor = color;
    let img = document.createElement('img');
    img.id = 'overlay_img';
    document.body.appendChild(overlay);
    document.body.appendChild(img);
    if (color == 'green') {
        img.src = 'checkmark.png';
    }
    if (color == 'red') {
        img.src = 'cross.png';
    }
    setTimeout(revert, 1000)


}

function revert() {
    document.getElementById('overlay').remove();
    document.getElementById('overlay_img').remove();


}

//kleur overlay functie end

//volgende vraag functie

function volgendeVraag() {
    resetState()
    displayVraag(shuffledQuestions[currentQuestionIndex])
}
let i = 2
let score = 0;

function displayVraag(vraag) {
    const div2 = document.getElementById('parent').appendChild(document.createElement('div'))
    div2.classList.add('div1')
    div2.setAttribute('id', 'vraagVeld')
    div2.innerText = vraag.vraag
    vraag.antwoord.forEach(answer => {
        const div = document.getElementById('parent').appendChild(document.createElement('div'))
        div.innerText = answer.text
        div.classList.add('div' + i++)
        div.addEventListener('click', volgendeVraag)
        div.addEventListener('click', () => {
            currentQuestionIndex++
            console.log(currentQuestionIndex)
            if (currentQuestionIndex > 9) {
                results.classList.remove('hide')
                vragenContainer.remove()
            }
            if (answer.correct) {
                score++
                turn('green')
                console.log(score)
                document.getElementById('score').innerHTML = "uw score is " + score + "/10";
            } else {
                turn('red')
            }
            volgendeVraag()
        })

    })
    i = 2
}

//volgende vraag functie end



function resetState() {
    while (vragenContainer.firstChild) {
        vragenContainer.removeChild(vragenContainer.firstChild)
    }
}



function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

//vragen array

const vragen = [{
        vraag: 'In welke serie wordt er cristal meth gemaakt',
        antwoord: [
            { text: 'Big bang theory', correct: false },
            { text: 'Friends', correct: false },
            { text: 'Breaking bad', correct: true },
            { text: 'How i met your mother', correct: false }
        ]
    },
    {
        vraag: "Welk bedijf heeft in 2012 het bedrijf 'Lucas Films' gekocht",
        antwoord: [
            { text: 'Amazon', correct: false },
            { text: 'Warner bros.', correct: false },
            { text: 'Disney', correct: true },
            { text: 'Universal studio', correct: false }
        ]
    },
    {
        vraag: 'Hoeveel star wars series zijn er gemaakt onder disney',
        antwoord: [
            { text: '1', correct: false },
            { text: '2', correct: false },
            { text: '3', correct: true },
            { text: '4', correct: false }
        ]
    },
    {
        vraag: 'In welke serie is de hoofdpersoon een architect',
        antwoord: [
            { text: 'Friends', correct: false },
            { text: 'Big bang theory', correct: false },
            { text: 'Breaking bad', correct: false },
            { text: 'How i met your mother', correct: true }
        ]
    },
    {
        vraag: 'Uit welke serie komt de grap "title of your seks tape"',
        antwoord: [
            { text: 'Brooklyn 99', correct: true },
            { text: 'Big bang theory', correct: false },
            { text: 'The office (US)', correct: false },
            { text: 'The office (UK)', correct: false }
        ]
    },
    {
        vraag: 'Uit welke serie komt de grap "thats what she said"',
        antwoord: [
            { text: 'Brooklyn 99', correct: false },
            { text: 'Big bang theory', correct: false },
            { text: 'The office (US)', correct: true },
            { text: 'The office (UK)', correct: false }
        ]
    },
    {
        vraag: 'In welke serie is er een organisatie genaamd "the galactic federation"',
        antwoord: [
            { text: 'Adventure time', correct: false },
            { text: 'Rick and Morty', correct: true },
            { text: 'Star trek: the original serie', correct: false },
            { text: 'The mandalorian', correct: false }
        ]
    },
    {
        vraag: 'Hoeveel seizoenen van rick and morty zijn er nu gemaakt',
        antwoord: [
            { text: '2', correct: false },
            { text: '3', correct: false },
            { text: '4', correct: false },
            { text: '5', correct: true }
        ]
    },
    {
        vraag: 'Hoe heet de primaire shinigami in de serie death note',
        antwoord: [
            { text: 'Rem1', correct: false },
            { text: 'Sidoh', correct: false },
            { text: 'Gelus', correct: false },
            { text: 'Ryuk', correct: true }
        ]
    },
    {
        vraag: 'Welke animatie studio heeft geen tv serie gemaakt',
        antwoord: [
            { text: 'Disney', correct: false },
            { text: 'Pixar', correct: true },
            { text: 'Cartoon network', correct: false },
            { text: 'Warner bros.', correct: false }
        ]
    },

]

// vragen array end