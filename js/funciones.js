export const sendToWhatsApp = () => {
    // Construct the message with product details
    const message = `¡Hola! Estoy interesado en el producto: ${registro.titulo}. Aquí están los detalles: 
    Referencia: ${registro.referencia}, Descripción: ${registro.descripcion}, Panty: ${registro.panty}, 
    Talla: ${registro.talla}, Color: ${registro.color}, Precio: ${registro.precio}`;
    
    // Encode the message for URL
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp with the pre-filled message
    window.open(whatsappUrl, '_blank');
}