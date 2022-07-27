const getInfo= async ()=> {
    let aprobados=document.querySelector(`.aprobados`)
    let desaprobados=document.querySelector(`.desaprobados`)
    try {
    let peticion=await axios(`../simulacionDeServidor/Servidor.txt`);
    let resultado=peticion.data
    aprobados.innerHTML=`Aprobados: <b class="num-aprobados">${resultado.aprobados}</b>`
    desaprobados.innerHTML=`Desaprobados: <b class="num-desaprobados">${resultado.desaprobados}</b>`
    }catch(e){
        aprobados.innerHTML=`LA API FALLÓ`
        desaprobados.innerHTML=`LA API FALLÓ`
    }
}
document.querySelector(`.getInfo`).addEventListener(`click`,getInfo)