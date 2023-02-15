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
        vraag: 'Waar komen The Beatles van daan?',
        antwoord: [
            {text: 'Nederland', correct: false},
            {text: 'Belgie', correct: false},
            {text: 'Duitlsand', correct: false},
            {text: 'Engeland', correct: true}
        ]
    },
    {
        vraag: 'Welke vrouwelijke artiest heeft de meeste Grammys gewonnen?',
        antwoord: [
            {text: 'Ariana Grande', correct: false},
            {text: 'Beyonce', correct: true},
            {text: 'Lady Gaga', correct: false},
            {text: 'Taylor Swift', correct: false}
        ]
    },
    {
        vraag: 'Wat voor music maakt Kurt Cobain?',
        antwoord: [
            {text: 'Pop', correct: false},
            {text: 'Jazz', correct: false},
            {text: 'Kpop', correct: false},
            {text: 'Rock', correct: true}
        ]
    },
    {
        vraag: 'Wie is de meest gestreamde mannelijke artiest op Spotify?',
        antwoord: [
            {text: 'The Weekend', correct: true},
            {text: 'Justin Bieber', correct: false},
            {text: 'Ed Sheeran', correct: false},
            {text: 'Coldplay', correct: false}
        ]
    },
    {
        vraag: 'Welke van de ondestaande music genres is geen genre?',
        antwoord: [
            {text: 'New Weird America', correct: false},
            {text: 'Freak Folk', correct: false},
            {text: 'Window Jazz', correct: true},
            {text: 'VaporWave', correct: false}
        ]
    },
    {
        vraag: 'Wie is de meest gestreamden Kpop girlband?',
        antwoord: [
            {text: 'BLACKPINK', correct: true},
            {text: 'ITZY', correct: false},
            {text: 'Red Velvet', correct: false},
            {text: 'TWICE', correct: false}
        ]
    },
    {
        vraag: 'Welk nummer stond op nummer 1 van de NPO Radio 2 Top 2000?',
        antwoord: [
            {text: 'Hotel California', correct: false},
            {text: 'A Whiter Shade of Pale', correct: true},
            {text: 'Roller Coaster', correct: false},
            {text: 'Bohemian Rhapsody', correct: true}
        ]
    },
    {
        vraag: 'Door welk liedje is Doja Cat popular geworden vanwege TikTok?',
        antwoord: [
            {text: 'Woman', correct: false},
            {text: 'Say So', correct: true},
            {text: 'Kiss Me More', correct: false},
            {text: 'Get Into It (Yuh)', correct: false}
        ]
    },
    {
        vraag: 'Wie is de meest gestreamde Vrouwelijke artiest op Spotify?',
        antwoord: [
            {text: 'Adele', correct: false},
            {text: 'Dua Lipa', correct: true},
            {text: 'Doja Cat', correct: false},
            {text: 'Taylor Swift', correct: false}
        ]
    },
    {
        vraag: 'Door welke artiets is Madison Beer ondekt?',
        antwoord: [
            {text: 'Justin Bieber', correct: true},
            {text: 'Kanye West', correct: false},
            {text: 'Ariana Grande', correct: false},
            {text: 'Katy Perry', correct: false}
        ]
    },

]
// vragen array end