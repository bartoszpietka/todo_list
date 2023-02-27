async function getToDos(){
    const data = await fetch(baseurl+"/gettodos")
    const json = await data.json()
    console.log(json)

    document.getElementById("app").innerHTML = ""



    for(var i=0;i<=json.length-1;i++){
        const div = document.createElement("div")
        div.classList.add("siemano")
        document.getElementById("app").appendChild(div)

        const nazwa = document.createElement("h1")
        nazwa.innerHTML = json[i].name
        div.appendChild(nazwa)

        const czas = document.createElement("h1")
        czas.innerHTML = json[i].daystoend
        div.appendChild(czas)

        if(json[i].done == true){
            div.classList.add("done")
        } else{div.classList.add("notdone")} 
    }

}

async function sendData(){
    const nazwa = document.getElementById("nazwa").value
    const czas = document.getElementById("czas").value

    const url = `${baseurl}/addtodo/${nazwa}/${czas}`

    await fetch(url)

    console.log(nazwa)
    console.log(czas)
    getToDos()
}
getToDos()