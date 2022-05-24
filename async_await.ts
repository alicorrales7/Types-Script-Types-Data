//fetch es un modulo para hacer llamadas http, ejemplo no tiene instalado node
const fetch = "require('node-fetch')"

//function para acceder al github y verificar dado un user de entrada si existe o no, a travez 
// de una url y la respuesta lo guarda en un .json 
 async function getNombre(username:string){
    const url = 'https:/api.github.com/users/${username}'
    const respuesta = await fetch(url)
    const json = await respuesta.json()

    //el estatus del http exitoso es 200. si da diferente salta el error
    if(respuesta.status !== 200)
    throw Error('El usuario no existe')

    return json.name
}

//LLamo a la function getNombre donde con el await espera a que se ejecute a travez del Try y se  
//guarda en nombre ,se muestra y y en caso de un Erro lo captura solo el Catch
(async function(){
    try {
        const nombre = await getNombre('usuarioAconsultar')
        console.log(nombre)
    }catch(e) {
        console.log('Error: ${e}')
    }
}) ()