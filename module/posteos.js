const posts = {

    posts: [
    
        {
            id: "1",
            userId: "1",
            descrip: "Aca tomando mates con mis compas de programacion",
            fecha:"2021-09-21",
            img:""    
        },
        {
            id: "2",
            userId: "1",
            descrip: "Una con Leo",
            fecha:"2021-09-22",
            img:""     
        },
        {
            id: "4",
            userId: "2",
            descrip: "Estudiandoo",
            fecha:"2021-09-23",
            img:""    
        },
        {
            id: "5",
            userId: "2",
            descrip: "El Diego me invito a un asado!",
            fecha:"2021-09-27",
            img:""        
        },
        {
            id: "6",
            userId: "4",
            descrip: "Aca con Franco y Sofi!",
            fecha:"2021-09-27",
            img:""    
        },
        {
            id: "7",
            userId: "4",
            descrip: "Que duro esta programacioon loco",
            fecha:"2021-09-27",
            img:""    
        },
        {
            id: "8",
            userId: "5",
            descrip: "Throwback al mundial del 86",
            fecha:"2021-09-20",
            img:""    
        },
        {
            id: "9",
            userId: "5",
            descrip: "Con un gran amigo",
            fecha:"2021-09-27",
            img:""    
        },
        {
            id: "10",
            userId: "7",
            descrip: "Asado con los pibes",
            fecha:"2021-09-27",
            img:""    
        },
        {
            id: "11",
            userId: "7",
            descrip: "#CampeonesDeAmerica",
            fecha:"2021-09-27",
            img:""    
        },
    ],
    porId: function (id) {
        let respuesta = []
        for (let i = 0; i < posts.posts.length; i++) {
            if (posts.posts[i].id == id) {
                respuesta.push(posts.posts[i])
            }
        }
        
        return respuesta        
    },
    
    }    
    
    
    
    module.exports = posts