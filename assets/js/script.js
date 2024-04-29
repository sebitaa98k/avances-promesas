const obtenerDigimonPromesas =() =>{
    return new Promise(function(resolve,reject){
        fetch('https://digimon-api.vercel.app/api/digimon')
            .then((response) =>{
                if(!response.ok){
                    throw new Error("Error");
                }
                return response.json();
            })
            .then((data) =>{
                resolve(data);
            })
            .catch((Error)=>{
                reject(error)
            })

    });


}


   


        obtenerDigimonPromesas()
        .then((digimones)=>{
            digimones.map((digimon)=> {
                console.log(digimon);
            })
        }).catch((error)=>{
            console.log(`El error es: ${error}`);
        })



        // El await hace q espere el sistema mientras que sigue realizando la carga