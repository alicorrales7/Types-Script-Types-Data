

//arrow function
  const pelis = [{
        id: 1,
        title: "The Batman",
        year: 2022
    },
    {
        id: 2,
        title: "Uncharted",
        year: 2022
    }, {
        id: 3,
        title: "Doctor Strange",
        year: 2022
    }]

    function saberPelis() {
        return new Promise((resolve, reject) => {
            console.log("Cargando pelis");

            setTimeout(() => {
                console.log("Demora")
                resolve(pelis)
            },2000)
        });
    
    
    }

    //Se puede utilizar el .then()
saberPelis()
.then((datos) => { console.log(datos) })

//O se puede utilizar el async - await

async function getPelis() {
    const all = await saberPelis();
    console.log(all)
}

getPelis();