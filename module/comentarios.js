const comentarios = {

    comentarios: [
    
        {
            id: "1",
            userId: "1",
            descrip: "dale que se aprueba!",
            fecha:"2021-11-03 08:00:00",
            postId:"4"    
        },
        {
            id: "2",
            userId: "1",
            descrip: "Eee inviten malaonda",
            fecha:"2021-10-03 10:20:31",
            postId:"5"       
        },
        {
            id: "3",
            userId: "1",
            descrip: "grande leo!",
            fecha:"2021-12-23 12:01:54",
            postId:"10"       
        },
        {
            id: "4",
            userId: "1",
            descrip: "ponete las pilas!",
            fecha:"2021-11-03 08:00:00",
            postId:"6"        
        },
        {
            id: "5",
            userId: "2",
            descrip: "muy buena tardee",
            fecha:"2021-11-03 08:00:00",
            postId:"1"            
        },
        {
            id: "6",
            userId: "2",
            descrip: "que pinta!",
            fecha:"2021-11-03 08:00:00",
            postId:"10"        
        },
        {
            id: "7",
            userId: "2",
            descrip: "grande diegote!",
            fecha:"2021-11-03 08:00:00",
            postId:"8"        
        },
        {
            id: "8",
            userId: "2",
            descrip: "daale carloss!",
            fecha:"2021-11-03 08:00:00",
            postId:"7"        
        },
        {
            id: "9",
            userId: "4",
            descrip: "aver si aprobamos",
            fecha:"2021-11-03 08:00:00",
            postId:"1"        
        },
        {
            id: "10",
            userId: "4",
            descrip: "te pidio el una foto??",
            fecha:"2021-11-03 08:00:00",
            postId:"2"        
        },
        {
            id: "11",
            userId: "4",
            descrip: "que equipazo",
            fecha:"2021-11-03 08:00:00",
            postId:"11"        
        },
        {
            id: "12",
            userId: "4",
            descrip: "que alegria",
            fecha:"2021-11-03 08:00:00",
            postId:"8"        
        },
        {
            id: "13",
            userId: "4",
            descrip: "noo que ganas!",
            fecha:"2021-09-22",
            postId:"5"         
        },
        {
            id: "14",
            userId: "5",
            descrip: "facha leo",
            fecha:"2021-11-03 08:00:00",
            postId:"2"        
        },
        {
            id: "15",
            userId: "5",
            descrip: "Un placer!!",
            fecha:"2021-11-03 08:00:00",
            postId:"5"            
        },
        {
            id: "16",
            userId: "5",
            descrip: "Que lindo equipo!",
            fecha:"2021-11-03 08:00:00",
            postId:"11"        
        },
        {
            id: "17",
            userId: "5",
            descrip: "ganadores",
            fecha:"2021-11-03 08:00:00",
            postId:"10"        
        },
        {
            id: "18",
            userId: "7",
            descrip: "facha leo",
            fecha:"2021-11-03 08:00:00",
            postId:"2"        
        },
        {
            id: "19",
            userId: "7",
            descrip: "Un placer!!",
            fecha:"2021-11-03 08:00:00",
            postId:"5"        
        },
        {
            id: "20",
            userId: "7",
            descrip: "Que lindo equipo!",
            fecha:"2021-11-03 08:00:00",
            postId:"11"        
        },
        {
            id: "21",
            userId: "7",
            descrip: "ganadores!!",
            fecha:"2021-11-03 08:00:00",
            postId:"10"        
        },
  
    ],
    porId: function (id) {
        let respuesta = []
        for (let i = 0; i < comentarios.comentarios.length; i++) {
            if (comentarios.comentarios[i].id == id) {
                respuesta.push(comentarios.comentarios[i])
            }
        }
        
        return respuesta        
    },
    
    }    
    
    
    
    module.exports = comentarios