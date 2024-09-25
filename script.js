class GestorInternet{
    constructor(nombre, numContrato){
        this.nombre = nombre
        this.precio = 15000
        this.numContrato=numContrato
        this.tipoPlan = "básico"
        this.velocidad = 100
       }

    getNombre(){
        return this.nombre
    }
    getPrecio(){
        return this.precio
    }
    getContrato(){
        return this.numContrato
    }
    getPlan(){
        return this.tipoPlan
    }
    getVelocidad(){
        return this.velocidad
    }
    setPrecio(nuevoPrecio){
        if (nuevoPrecio > 0){
            this.precio = nuevoPrecio
        }
        else{
            alert("El nuevo precio debe ser mayor a 0")
        }
    }
    setPlan(nuevoPlan){
        if (nuevoPlan == "básico" || nuevoPlan == "estandar" || nuevoPlan == "premium"){
            this.getPlan = nuevoPlan
            if (nuevoPlan == "básico"){
                this.velocidad = 100
            }
            else if (nuevoPlan == "estandar"){
                this.velocidad = 200
            }
            else{
                this.velocidad = 300
            }
            

        }
        else{
            alert("El nuevo plan debe ser básico, estandar o premium")
        }

    }
}

function mostrarInfo(){
    document.getElementById("info").innerHTML = gestor1.getNombre()
}
gestor1.setPlan=document.getElementById("plan").value
gestor1.setPlan
let gestor1 = new GestorInternet("pedro", 999999)

var nombre = gestor1.getNombre()
alert("nombre del gestor: "+ gestor1.getNombre())

