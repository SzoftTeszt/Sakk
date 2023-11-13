const state={
    honnan:null,
    hova:null
}

document.getElementById("letrehoz").onclick=tablaletrehozas

function tablaletrehozas(){
    console.log("sakktábla")
    
    document.getElementById('palya').innerHTML=""

    for (let j = 0; j < 8; j++) {
        let sor=document.createElement('div')
        sor.className="sor"
        for (let i = 0; i < 8; i++) {
            let cella=document.createElement('div')
            cella.classList.add("cella")

            // if (j%2) 
            // {
            //     if (i%2) cella.classList.add("feher")
            //     else cella.classList.add("fekete")
            // }
            // else{
            //     if (i%2) cella.classList.add("fekete")
            //     else cella.classList.add("feher")
            // }
            
            if ((i+j)%2) cella.classList.add("fekete")
            else cella.classList.add("feher")

            cella.onclick=lep
            
            sor.appendChild(cella)       
        } 
        document.getElementById('palya').appendChild(sor)
    }
    document.getElementById('palya').children[1].childNodes.forEach(
        (e)=>e.classList.add("fekete_gyalog")
    )
    document.getElementById('palya').children[6].childNodes.forEach(
        (e)=>e.classList.add("feher_gyalog")
    )
    tisztekKirak("feher")
    tisztekKirak("fekete")
    // document.getElementById('palya').style.width="80vh"   
}
    // palya= document.getElementById('palya')
    // palya.appendChild(cella)




// document.getElementById("letrehoz").addEventListener("click", letrehoz2)

function tisztekKirak(szin){
    let tiszt=["bastya", "lo", "futo", "kiralyno", "kiraly","futo", "lo","bastya"]
    let sor=0
    if (szin!="fekete") sor=7
    let elemek = document.getElementById('palya').children[sor]

    for (let i = 0; i < 8; i++) {
        elemek.children[i].classList.add(szin+"_"+tiszt[i])        
    }

}
function babuVissza(cella){
    let t=cella.className.split(' ')
    t=t.filter(
        function(e){
            return e.includes('_')
        }
    )    
    if (t.length>0) return t[0]
    else return null
}

function lep(){
    console.log(state)
    if (!state.honnan) {
        if (babuVissza(this))
        {
            this.classList.add("honnan")
            state.honnan=this
        }    
    }
    else
    {
        if (!babuVissza(this))
        {
            banu=babuVissza(state.honnan)
            state.honnan.classList.remove(banu)
            state.honnan.classList.remove("honnan")
            this.classList.add(banu)
            state.honnan=null
        }
    }
}

function letrehoz(){
    console.log("cica1")
    document.getElementById("palya").innerHTML += '<div class="alma">Ez itt egy div!</div>'
}


function letrehoz2(){
    // console.log("cica2")
    // document.getElementById("palya").innerHTML += '<div class="alma">Ez itt egy másik div</div>'

    let alma= document.createElement('div')
    alma.className="alma"
    // alma.innerText="<p>Bekezdés</p>"
    alma.innerHTML="<p>Bekezdés</p>"
    document.getElementById("palya").appendChild(alma)

}


