const { users } = require("./users");

const posts = {

    posts: [
    
        {
            id: "1",
            userId: "0",
            descrip: "Aca tomando mates con mis compas de programacion",
            fecha:"2021-09-21",
            img:"https://fotos.perfil.com/2019/11/27/trim/1280/720/bebiendo-mate-20191127-809602.jpg",
            usuario:"francoleone1"    
        },
        {
            id: "2",
            userId: "0",
            descrip: "Una con Leo",
            fecha:"2021-09-22",
            img:"https://depor.com/resizer/hxvPVLqpEVhqoAvqGwLN8Zb57x0=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/UD3XXRVGQ5GOTODD3J6PC63CVM.jpg",
            usuario:"francoleone1"     
        },
        {
            id: "4",
            userId: "1",
            descrip: "Estudiandoo",
            fecha:"2021-09-23",
            img:"https://www.buscouniversidad.com.ar/orientacion/wp-content/uploads/2020/04/Estudiar-en-casa-1.jpg",
            usuario:"brian.gomez"
        },
        {
            id: "5",
            userId: "1",
            descrip: "El Diego me invito a un asado!",
            fecha:"2021-09-27",
            img:"https://pbs.twimg.com/media/C7nL9vGW0AMniOV.jpg",
            usuario:"brian.gomez"        
        },
        {
            id: "6",
            userId: "2",
            descrip: "Aca con Franco y Sofi!",
            fecha:"2021-09-27",
            img:"https://previews.123rf.com/images/jackf/jackf1608/jackf160800684/64948110-chica-con-dos-chicos-que-presenta-en-parque-de-la-ca%C3%ADda-y-la-sonrisa.jpg",
            usuario:"carlitosdealvear"    
        },
        {
            id: "7",
            userId: "2",
            descrip: "Que duro esta programacioon loco",
            fecha:"2021-09-27",
            img:"https://i.blogs.es/5a9e4f/pankaj-patel-_sgrnwavnkw-unsplash/450_1000.jpeg",
            usuario:"carlitosdealvear"    
        },
        {
            id: "8",
            userId: "3",
            descrip: "Throwback al mundial del 86",
            fecha:"2021-09-20",
            img:"https://new.tvpublica.com.ar/wp-content/uploads/2021/06/r703925_1296x729_16-9.jpg",
            usuario:"eldiego1986"    
        },
        {
            id: "9",
            userId: "3",
            descrip: "Con un gran amigo",
            fecha:"2021-09-27",
            img:"https://lh3.googleusercontent.com/proxy/quxl_db3zeXqNh9LfIMBvF4ZBTjQ0zUmZ1lrSZVv5C8AIgOJn3RDFg4V1-DxuD9fnlDdJ2TRJxmNJPhyNM3Am08tR8hQ81rLftAvoHFW-pnKoJBQgQHbVE5oHyfjgArbMDT2c6GJKSJTdg8tD_FSld6lw2Um2iyNr_sn5MgwUW_djhTDFB8UMn75jL0bNlg4F332HuQnLzaN1XqxZIUjbWm5awTJWN9Rnvb0",
            usuario:"eldiego1986"    
        },
        {
            id: "10",
            userId: "4",
            descrip: "Asado con los pibes",
            fecha:"2021-09-27",
            img:"https://www.mendozapost.com/files/image/313/313414/60f5843f037f7.jpg",
            usuario:"leomessi123"    
        },
        {
            id: "11",
            userId: "4",
            descrip: "#CampeonesDeAmerica",
            fecha:"2021-09-27",
            img:"https://buckets3.glanacion.com/lntools/anexos/fotos/07/34707w412q100.jpg",
            usuario:"leomessi123"    
        },
    ],
    porId: function (userId) {
    
        for (let i = 0; i < posts.posts.length; i++) {
            const elstring = posts.posts[i];
            if (elstring.userId == userId) {
                return elstring;

            }
        }
    },
    
    }    


    
    
    
    
    module.exports = posts