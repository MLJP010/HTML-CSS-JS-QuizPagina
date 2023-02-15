const startBtn = document.getElementById('start-btn');
const startDiv = document.getElementById('start');
const vragenContainer = document.getElementById('parent');
const results = document.getElementById('result');
const vraagInhoud = document.getElementById('vraagVeld');

let naam = document.getElementById('naam');
let shuffledQuestions, currentQuestionIndex

//quiz start functie

startBtn.addEventListener('click', startQuiz)

function startQuiz(){
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
    setTimeout(revert, 1000 )


}

function revert() {
    document.getElementById('overlay').remove();
    document.getElementById('overlay_img').remove();


}

//kleur overlay functie end

//volgende vraag functie

function volgendeVraag(){
    resetState()
        displayVraag(shuffledQuestions[currentQuestionIndex])
    }
let i = 2
let score = 0;
function displayVraag(vraag){
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
                if(currentQuestionIndex > 9){
                        results.classList.remove('hide')
                        vragenContainer.remove()
                    }  
                if(answer.correct){
                        score++
                        turn('green')     
                        console.log(score)
                        document.getElementById('score').innerHTML = "uw score is " + score + "/10";
                }
                else{
                    turn('red')
                }
volgendeVraag()
})
        
})
    i = 2
}

//volgende vraag functie end



console.log(currentQuestionIndex)

function resetState(){
    while (vragenContainer.firstChild) {
        vragenContainer.removeChild(vragenContainer.firstChild)
      }
}

  
  
  function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
  }

//vragen array

const vragen = [
    {
        vraag: 'Wat was het budget voor christopher Nolans film TenneT',
        antwoord: [
            {text: '75 miljoen', correct: false},
            {text: '100 miljoen', correct: false},
            {text: '130 miljoen', correct: false},
            {text: '200 miljoen', correct: true}
        ]
    },
    {
        vraag: 'Hoe heet de hoofdpersoon uit Shawshank Redemption',
        antwoord: [
            {text: 'Andy Dufresne', correct: true},
            {text: 'Ellis Boyd', correct: false},
            {text: 'Cipher Norton', correct: false},
            {text: 'Stephen king', correct: false}
        ]
    },
    {
        vraag: 'Welke acteur speelde de joker in The Dark Knight',
        antwoord: [
            {text: 'Mark Hamill', correct: false},
            {text: 'Christian Bale', correct: false},
            {text: 'Heath Ledger', correct: true},
            {text: 'Joaquin Phoenix', correct: false}
        ]
    },
    {
        vraag: 'Welke film heeft in 2020 de oscar voor beste film gewonnen',
        antwoord: [
            {text: 'Joker', correct: false},
            {text: 'Parasite', correct: true},
            {text: '1917', correct: false},
            {text: 'Soul', correct: false}
        ]
    },
    {
        vraag: 'Hoeveel oscars heeft Leonardo DiCaprio in totaal gewonnen',
        antwoord: [
            {text: '2 oscars', correct: false},
            {text: '1 oscar', correct: true},
            {text: '3 oscars', correct: false},
            {text: '4 oscars', correct: false}
        ]
    },
    {
        vraag: 'welke acteur heeft Richard Harris vervangen als Dumbledore in HarryPotter',
        antwoord: [
            {text: 'Alan Rickman', correct: false},
            {text: 'Micael Caine', correct: false},
            {text: 'Michael Gambon', correct: true},
            {text: 'Anthony Hopkins', correct: false}
        ]
    },
    {
        vraag: 'Waar zijn de Lord of the Rings films opgenomen',
        antwoord: [
            {text: 'Schotland', correct: false},
            {text: 'Nieuw Zeeland', correct: true},
            {text: 'Amerika', correct: false},
            {text: 'Ierland', correct: false}
        ]
    },
    {
        vraag: 'Wat is de eerste MCU film in chronologische volgorde',
        antwoord: [
            {text: 'Captain America: The first avenger', correct: true},
            {text: 'Iron Man', correct: false},
            {text: 'Doctor Strange', correct: false},
            {text: 'Captain Marvel', correct: false}
        ]
    },
    {
        vraag: 'Wie is de Regiseur van Silence of the Lambs',
        antwoord: [
            {text: 'Steven Spielberg', correct: false},
            {text: 'Oliver Stone', correct: false},
            {text: 'Christopher Noland', correct: false},
            {text: 'Jonathan Demme', correct: true}
        ]
    },
    {
        vraag: 'Van welke film komt de quote: “You can’t handle the truth!”',
        antwoord: [
            {text: 'Jurrasic Park', correct: false},
            {text: 'A Few Good Men', correct: true},
            {text: 'Saving Private Ryan', correct: false},
            {text: 'The Godfather', correct: false}
        ]
    },

]

//vragen array end