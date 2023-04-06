const touches = [...document.querySelectorAll("button")]
const listekeycode= touches.map(touche => touche.dataset.key)
const ecran=document.querySelector(".ecran")

document.addEventListener('keydown',(e)=>{
    const valeur = e.keycode.toString ();
    calculer(valeur)

})

document.addEventListener('click',(e)=>{
    const valeur = e.target.dataset.key
    calculer(valeur)
})

const calculer = (valeur)=>{
    if (listekeycode.includes(valeur)){
        switch (valeur){
            case'8':
                ecran.TextContent="";
                break;
        }
        switch (valeur){
            case '115':
                valeur = valeur.slice(0, -1); 
                break;
        }
        switch (valeur){
            case '13':
                const calcul = eval(ecran.textContent)
                ecran.textContent= calcul
                break;
                Default:
                const indexkeycode = listekeycode.indexOf(valeur)
                const touche = touches[indexkeycode]
                ecran.textContent += touche.innerHTML
            }
    }

}


