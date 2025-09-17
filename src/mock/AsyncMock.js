export const productos = [
    // ===== Nuestros Cafés =====
  
    {
        
        name: 'Café Etiopía Sidamo',
        description: 'Aromas florales y cítricos, acidez brillante.',
        category: 'Nuestros cafes',
        stock: 10,
        price: 920,
        img: 'https://i.postimg.cc/BQVg2tt4/etiopia-cafe.webp'
    },
    {
        
        name: 'Blend Espresso Intenso',
        description: 'Cuerpo alto, perfecto para espresso.',
        category: 'Nuestros cafes',
        stock: 20,
        price: 780,
        img: 'https://i.postimg.cc/kMwwXTmV/blend-cafe.webp'
    },

    // ===== Cafeteras y Métodos =====
    {
        
        name: 'Cafetera Espresso Breville Bambino',
        description: 'Cafetera compacta para espresso y cappuccino.',
        category: 'Cafeteras y métodos',
        stock: 5,
        price: 22500,
        img: 'https://i.postimg.cc/CMNr6Tkz/breville-bambino.jpg'
    },
    {
        
        name: 'Método V60 Hario 02',
        description: 'Método de filtrado japonés para café limpio y aromático.',
        category: 'Cafeteras y métodos',
        stock: 12,
        price: 3500,
        img: 'https://i.postimg.cc/wjtWv1Pm/v60.jpg'
    },
    {
        
        name: 'Prensa Francesa Bodum 1L',
        description: 'Ideal para café de cuerpo medio y texturizado.',
        category: 'Cafeteras y métodos',
        stock: 8,
        price: 4200,
        img: 'https://i.postimg.cc/c4k90RDW/prensa-francesa-1-L.webp'
    },

    // ===== Accesorios =====
    {
       
        name: 'Tamper de Acero Inoxidable 58mm',
        description: 'Base plana y mango ergonómico para espresso.',
        category: 'Accesorios',
        stock: 25,
        price: 1800,
        img: 'https://i.postimg.cc/W1Q5J2Lf/tamper.webp'
    },
    {
        
        name: 'Pitcher para Latte Art 600ml',
        description: 'Perfecto para espumar y verter leche.',
        category: 'Accesorios',
        stock: 18,
        price: 1500,
        img: 'https://i.postimg.cc/c4L9p9BT/pitcher.webp'
    },
    {
        
        name: 'Distribuidor de Café 58mm',
        description: 'Logra una extracción uniforme en tu espresso.',
        category: 'Accesorios',
        stock: 12,
        price: 2000,
        img: 'https://i.postimg.cc/kGtr9zpb/distribuidor-cafe.webp'
    }
]

//Promesa 1

export const getProducts = () =>{
    let error = false
    return new Promise ((resolve, reject)=>{
        setTimeout(()=> {
            if (error){
                //existe el eror, rechazamos
                reject('hubo un error')
            }else{
                resolve(productos)
            }
        },2000)
    })
}

export const getItem = (id) =>{
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            let prod = productos.find((item)=> item.id === parseInt(id))
            resolve(prod)
        }, 1000)
    })
}