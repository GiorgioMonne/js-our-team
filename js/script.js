// Ricreiamo le card del nostro team aggiungendo al layout di base fornito, il nostro javascript in cui:
// Creiamo il nostro array di oggetti che rappresentano ciascun membro del team. Ogni membro dovrà avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// Prendendo come riferimento il layout di esempio presente nell'html, stampiamo tutte le card del nostro team.
// BONUS: Utilizziamo poi gli input presenti nella pagina per permettere all'utente di aggiungere nuovi membri del team.


// ***CREO L'ARRAY DI OGGETTI***

let cards = [
    {
        'nome': "Wayne Barnett",
        'ruolo': "Founder & CEO",
        'image': "img/wayne-barnett-founder-ceo.jpg"

    },
    {
        'nome': "Angela Caroll",
        'ruolo': "Chief Editor",
        'image': "img/angela-caroll-chief-editor.jpg"

    },
    {
        'nome': "Walter Gordon",
        'ruolo': "Office Manager",
        'image': "img/walter-gordon-office-manager.jpg"

    },
    {
        'nome': "Angela Lopez",
        'ruolo': "Social Media Manager",
        'image': "img/angela-lopez-social-media-manager.jpg"

    },
    {
        'nome': "Scott Estrada",
        'ruolo': "Developer",
        'image': "img/scott-estrada-developer.jpg"

    },
    {
        'nome': "Barbara Ramos",
        'ruolo': "Graphic Designer",
        'image': "img/barbara-ramos-graphic-designer.jpg"

    }
];

// ***CREO LA FUNZIONE BACKTIK PER STAMPARE DENTRO IL CONTAINER TUTTA LA CARD***

let carta = "";


for(let i = 0; i < cards.length;i++){
    
    console.log(cards[i]);

    carta += `
    <div class="team-card">
        <div class="card-image">
        <img src="${cards[i].image}" alt=""/>
    </div>
        <div class="card-text">
            <h3>${cards[i].nome}</h3>
            <p>${cards[i].ruolo}</p>
        </div> 
    </div> `;
}

document.querySelector('.team-container').innerHTML = carta;
    
console.log(cards);

// ***BONUS***

let nomeN;
let ruoloN;
let imgN;

let pers= [];

document.getElementById("addMemberButton").addEventListener("click", function(){

    nomeN= document.getElementById("name").value;
    ruoloN= document.getElementById("role").value;
    imgN= document.getElementById("image").value;

    pers = [
        {
            'nome': nomeN,
            'ruolo': ruoloN,
            'image': imgN

        }
    ];

    // pers.push(cards);
});

pers.push(cards);