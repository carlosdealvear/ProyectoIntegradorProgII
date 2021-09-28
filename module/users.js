const users = {

    users: [
    
        {
            id: "1",
            nombre: "Franco",
            apellido: "Leone",
            email: "fleone@udesa.edu.ar",
            password: "12345",
            fecha:"2002-07-04",
            img:"",
            usuario:"francoleone1"
        },
        {
            id: "2",
            nombre: "Brian",
            apellido: "Gomez",
            email: "bgomez@digitalhouse.com",
            password: "12346",
            fecha:"2002-09-12",
            img:"",
            usuario:"brian.gomez"       
        },
        {
            id: "4",
            nombre: "Carlos",
            apellido: "De Alvear",
            email: "cdealvear@udesa.edu.ar",
            password: "12347",
            fecha:"2002-01-10",
            img:"",
            usuario:"carlitosdealvear" 
        },
        {
            id: "5",
            nombre: "Diego Armando",
            apellido: "Maradona",
            email: "dmaradona@udesa.edu.ar",
            password: "12345",
            fecha:"1960-10-30",
            img:"",
            usuario:"eldiego1986"     
        },
        {
            id: "7",
            nombre: "Lionel Andres",
            apellido: "Messi",
            email: "lmessi@udesa.edu.ar",
            password: "12345",
            fecha:"1987-06-24",
            img:"",
            usuario:"leomessi123" 
        },
    ],
    porNombre: function (nombre) {
        let respuesta = []
        for (let i = 0; i < users.users.length; i++) {
            if (users.users[i].nombre == nombre) {
                respuesta.push(users.users[i])
            }
        }
        
        return respuesta        
    },
    
    }    
    
    
    
    module.exports = users