/*document.addEventListener("DOMContentLoaded",function(){
    const listaLiBomba=document.querySelector("ul")
    const listaLi=document.querySelector("ul")
    console.log(listaLiBomba)
    for(let i=0;i<1;i++){
        listaLiBomba.innerHTML+="<li class=bomba"+i+"></li>"
    }
    for(let i=1;i<16;i++){
        listaLi.innerHTML+="<li class=arco"+i+"></li>"
    }

    let elementiLi=document.querySelectorAll(" ul li")
    console.log(elementiLi)
    for(let i=0;i<elementiLi.length;i++)
    {
        elementiLi[i].onclick=function()
        {
           let controllo=this.classList.contains("bomba")
            console.log(controllo)
            
            
            if(controllo==0){
                
                
                elementiLi[i].classList.add("bomba")
                console.log(this)
                
               
            }else if(controllo==1) {
                elementiLi[i].classList.add("arco")
            }
           
        }
        
    }


 function boxImmagini(){
    let immagini=["url(../immagini/bomb.png)","url(../immagini/rainbow.png)"]
    console.log(immagini)
    let imgRandom=Math.floor(Math.random()*immagini.length)
    console.log(imgRandom)
    return immagini[imgRandom]
}
});//DOMContentLoaded*/
document.addEventListener("DOMContentLoaded", function() {
    const areaDiGioco = document.querySelector("#gioco ul");
    const coperturaSpan = document.querySelector("#gioco span");
    const areaRisultato = document.querySelector("#fine");
    const contatoreClickSpan = document.querySelector("#fine span");
    const pulsanteNuovaPartita = document.querySelector("#new");
    let indiceBomba = Math.floor(Math.random() * 16);
    let numeroClick = 0;

    function iniziaGioco() {
        areaDiGioco.innerHTML = ''; // Reset dell'area di gioco
        indiceBomba = Math.floor(Math.random() * 16); // Posizione casuale della bomba
        numeroClick = 0;
        areaRisultato.style.display = 'none';
        coperturaSpan.classList.remove('bloccaGioco');

        for (let i = 0; i < 16; i++) {
            const li = document.createElement('li');
            li.addEventListener('click', gestisciClick);
            areaDiGioco.appendChild(li);
        }
    }

    function gestisciClick() {
        if (!this.classList.contains('cliccato')) {
            this.classList.add('cliccato');
            numeroClick++;
            if (this === areaDiGioco.children[indiceBomba]) {
                this.classList.add('bomba'); // Aggiunge la classe bomba
                terminaGioco(true);
            } else {
                this.classList.add('arco'); // Aggiunge la classe arco
            }
        }
    }

    function terminaGioco(trovataBomba) {
        coperturaSpan.classList.add('bloccaGioco'); // Impedisce ulteriori click
        areaRisultato.style.display = 'block';
        contatoreClickSpan.textContent = numeroClick;

       
       
       
    }

    pulsanteNuovaPartita.addEventListener('click', function() {
        iniziaGioco();
    });

    iniziaGioco(); // Inizializza il gioco all'avvio
});