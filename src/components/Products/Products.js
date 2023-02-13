export const products = [
    {
        id: 1,
        name: "Forza Horizon 5",
        price: 3300,
        stock: 100,
        img: "/images/juegos/forza5.jpg",
        description: "Maneja como nunca en el mundo de Forza Horizon, con una gran cantidad de vehiculos que te encantaran.",
        category: "Carreras",
    },
    {
        id: 2,
        name: "CyberPunk 2077",
        price: 5200,
        stock: 100,
        img: "/images/juegos/cyber77.jpg",
        description: "Un futuro lleno de tecnologia avanzada y problemas te esperan.",
        category: "RPG"

    },
    {
        id: 3,
        name: "Hogwart Legacy",
        price: 12000,
        stock: 100,
        img: "/images/juegos/hogwartlegacy.jpg",
        description: "Explora el maravilloso mundo de Harry Potter en esta nueva entrega, se el mago que siempre quisiste ser",
        category: "RPG"
    },
    {
        id: 4,
        name: "DAYZ",
        price: 800,
        stock: 100,
        img: "/images/juegos/dayz.jpg",
        description: "Un mundo lleno de zombies y otros jugadores que buscan sobrevivir.",
        category: "RPG"
    }, 
    {
        id: 5,
        name: "Red Dead Redemption 2",
        price: 1600,
        stock: 100,
        img: "/images/juegos/rdr2.jpg",
        description: "Preparate para ser un forajido o cazarecompensas en el lejano oeste.",
        category: "RPG"
    },
    {
        id: 6,
        name: "The Crew 2",
        price: 1300,
        stock: 100,
        img: "/images/juegos/thecrew2.webp",
        description: "Preparate para correr en las calles de estadounidenses, gana fama y compra autos, botes o aviones.",
        category: "Carreras"
    },
    {
        id: 7,
        name: "Gran Turismo",
        price: 8300,
        stock: 100,
        img: "/images/juegos/granturismo7.jpg",
        description: "Corre con los increibles autos que todos conocemos, nuevo motor gráfico para vivir la mejor experiencia.",
        category: "Carreras"
    },
    {
        id: 8,
        name: "F1 22",
        price: 5400,
        stock: 100,
        img: "/images/juegos/f122.jpg",
        description: "Vive el mundo de la Formula 1, haz tu equipo o crea a tu piloto y corre contra los mejores de la F1.",
        category: "Carreras"
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}

export const getProductById = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(products.find(prod => {
                return prod.id === parseInt(id)
            }))
        }, 1000)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1000)
    })
}
