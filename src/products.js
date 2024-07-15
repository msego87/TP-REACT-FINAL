const products = [
    {
      sku: 1,
      name: "Smartphone Samsung Galaxy S21",
      description: "Pantalla Dynamic AMOLED 2X de 6.2 pulgadas, 128GB de almacenamiento, cámara triple de 64MP, 8GB de RAM.",
      price: 999.99,
      img: "https://static.vecteezy.com/system/resources/previews/002/641/213/non_2x/package-icon-vector.jpg"
    },
    {
      sku: 2,
      name: "Laptop ASUS ZenBook 14",
      description: "Procesador Intel Core i7-1165G7, 16GB de RAM, SSD de 512GB, pantalla Full HD de 14 pulgadas, Windows 10.",
      price: 1299,
      img: "https://static.vecteezy.com/system/resources/previews/002/641/213/non_2x/package-icon-vector.jpg"
    },
    {
      sku: 3,
      name: "Tablet Apple iPad Pro 12.9",
      description: "Chip M1 de Apple, pantalla Liquid Retina XDR de 12.9 pulgadas, 256GB de almacenamiento, Wi-Fi + Cellular.",
      price: 1099,
      img: "https://static.vecteezy.com/system/resources/previews/002/641/213/non_2x/package-icon-vector.jpg"
    },
    {
      sku: 4,
      name: "Smart TV LG OLED C1 Series 55 pulgadas",
      description: "Pantalla OLED 4K UHD, procesador α9 Gen4 AI, Dolby Vision IQ, Dolby Atmos, webOS.",
      price: 1599.99,
      img: "https://static.vecteezy.com/system/resources/previews/002/641/213/non_2x/package-icon-vector.jpg"
    },
    {
      sku: 5,
      name: "Cámara Sony Alpha a7 III",
      description: "Cámara sin espejo full-frame, sensor Exmor R CMOS de 24.2MP, grabación de video 4K, estabilización de imagen de 5 ejes.",
      price: 1999,
      img: "https://static.vecteezy.com/system/resources/previews/002/641/213/non_2x/package-icon-vector.jpg"
    },
    {
      sku: 6,
      name: "Monitor gaming ASUS ROG Swift PG279Q",
      description: "Pantalla IPS de 27 pulgadas, resolución WQHD 2560x1440, tiempo de respuesta de 4ms, G-SYNC.",
      price: 699.99,
      img: "https://static.vecteezy.com/system/resources/previews/002/641/213/non_2x/package-icon-vector.jpg"
    },
    {
      sku: 7,
      name: "Impresora multifuncional HP OfficeJet Pro 9025",
      description: "Impresora a color, escáner, copiadora, fax, Wi-Fi, Ethernet, impresión dúplex automática.",
      price: 329.99,
      img: "https://static.vecteezy.com/system/resources/previews/002/641/213/non_2x/package-icon-vector.jpg"
    },
    {
      sku: 8,
      name: "Auriculares inalámbricos Bose QuietComfort 45",
      description: "Cancelación de ruido activa, hasta 24 horas de batería, Bluetooth, controles táctiles.",
      price: 329,
      img: "https://static.vecteezy.com/system/resources/previews/002/641/213/non_2x/package-icon-vector.jpg"
    },
    {
      sku: 9,
      name: "Consola de videojuegos Xbox Series X",
      description: "Procesador AMD Ryzen Zen 2 de 8 núcleos, SSD de 1TB, capacidad 4K, soporte para ray tracing.",
      price: 499.99,
      img: "https://static.vecteezy.com/system/resources/previews/002/641/213/non_2x/package-icon-vector.jpg"
    },
    {
      sku: 10,
      name: "Router Wi-Fi TP-Link Archer AX6000",
      description: "Wi-Fi 6, velocidad de hasta 6000Mbps, 8 antenas de alta ganancia, procesador de 1.8GHz.",
      price: 299.99,
      img: "https://static.vecteezy.com/system/resources/previews/002/641/213/non_2x/package-icon-vector.jpg"
    },
    {
      sku: 11,
      name: "Altavoz inteligente Amazon Echo Studio",
      description: "Sonido inmersivo con Dolby Atmos, control por voz con Alexa, compatible con música en alta definición.",
      price: 199.99,
      img: "https://static.vecteezy.com/system/resources/previews/002/641/213/non_2x/package-icon-vector.jpg"
    },
    {
      sku: 12,
      name: "Smartwatch Garmin Fenix 6X Pro Solar",
      description: "Pantalla de 1.4 pulgadas, GPS, frecuencia cardíaca, seguimiento de actividades deportivas, carga solar.",
      price: 899.99,
      img: "https://static.vecteezy.com/system/resources/previews/002/641/213/non_2x/package-icon-vector.jpg"
    }
  ];

  export function getProducts(){
    return products;
  }

  export function getProduct(id) {
    return products.find((product) => product.sku === id);
  }