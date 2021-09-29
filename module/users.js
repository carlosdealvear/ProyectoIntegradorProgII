const users = {

    users: [

        {
            id: "0",
            nombre: "Franco",
            apellido: "Leone",
            email: "fleone@udesa.edu.ar",
            password: "12345",
            fecha: "2002-07-04",
            img: "/images/franco.png",
            usuario: "francoleone1"
        },
        {
            id: "1",
            nombre: "Brian",
            apellido: "Gomez",
            email: "bgomez@digitalhouse.com",
            password: "12346",
            fecha: "2002-09-12",
            img: "/images/sophi.png",
            usuario: "brian.gomez"
        },
        {
            id: "2",
            nombre: "Carlos",
            apellido: "De Alvear",
            email: "cdealvear@udesa.edu.ar",
            password: "12347",
            fecha: "2002-01-10",
            img: "/images/carlos.jpeg",
            usuario: "carlitosdealvear"
        },
        {
            id: "3",
            nombre: "Diego Armando",
            apellido: "Maradona",
            email: "dmaradona@udesa.edu.ar",
            password: "12345",
            fecha: "1960-10-30",
            img: "/images/diegoasado.jpeg",
            usuario: "eldiego1986"
        },
        {
            id: "4",
            nombre: "Lionel Andres",
            apellido: "Messi",
            email: "lmessi@udesa.edu.ar",
            password: "12345",
            fecha: "1987-06-24",
            img: "/images/messi.jpeg",
            usuario: "leomessi123"
        },
    ],
    porId: function (userId) {
        for (let i = 0; i < users.users.length; i++) {
            const elstring = users.users[i];
            if (users.users[i].id == userId) {
                console.log(elstring);
                return elstring;

            }
        }
    },

}



module.exports = users