import { data } from '../data/data.js';
import { sendToWhatsApp } from './funciones.js';

const db = data

export const section = document.createElement('section')
section.id = 'section'
section.className = 'section'

db.map(registro => {

	section.innerHTML += `
		<article class="article_container" itemscope itemtype="http://schema.org/Product">
			<span itemprop="sku">${registro.referencia}</span>
			<img src="../img/${registro.imagen}" alt="" itemprop="image">
			<div class="text_container">
				<h2 class="titulo" itemprop="name">${registro.titulo}</h2>
				<div class="padding fwb descripcion padding" itemprop="description">${registro.descripcion}</div>
				<div class="padding panty" itemprop="additionalType">${registro.panty}</div>
				<div class="padding talla" itemprop="size">${registro.talla}</div>
				<div class="padding fwb color" itemprop="color">${registro.color}</div>
				<div class="padding fwb precio" itemprop="offers" itemscope itemtype="http://schema.org/Offer"> ${registro.precio}</div>
			</div>

		</article>
	`
})