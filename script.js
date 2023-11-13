console.log("Szia")
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

            sor.appendChild(cella)       
        } 
        document.getElementById('palya').appendChild(sor)
    }
    // document.getElementById('palya').style.width="80vh"   
}
    // palya= document.getElementById('palya')
    // palya.appendChild(cella)




// document.getElementById("letrehoz").addEventListener("click", letrehoz2)

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


