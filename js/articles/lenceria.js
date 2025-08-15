import { lenceria } from '../../infoweb/lenceria.js';

let db = lenceria;

let section = document.getElementById("section")
section.className = 'section_container'
section.id = 'section'

db.map(registro => {

	section.innerHTML += `
		<article class="article" itemscope itemtype="http://schema.org/Product">
			<span class="article_id" itemprop="sku">${registro.id}</span>
			<a class="article_a_img" href='../img/${registro.image}' target='_blank'>
				<img class="article_img" src="../img/${registro.image}" alt="${registro.title}" itemprop="image">
			</a>
			<div class="article_content_text">
				<h2 class="article_title" itemprop="name">${registro.title}</h2>
				<p class="article_description " itemprop="description">${registro.description}</p>
				<p class="article_type" itemprop="additionalType">${registro.type}</p>
				<p class="article_garment" itemprop="size">${registro.garment}</p>
				<p class="article_color" itemprop="color">${registro.color}</p>
				<p class="article_price" itemprop="offers" itemscope itemtype="http://schema.org/Offer"> ${registro.price}</p>
			</div>
		</article>
	`
})