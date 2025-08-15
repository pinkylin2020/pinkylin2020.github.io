import { data_menu } from './data_menu.js'
import { boton } from './toggle.js'

// parametros del menu

export const nav_container = document.createElement('nav')
nav_container.className = 'nav_container'

const navegacion = document.createElement('ul')
navegacion.id = 'navegacion'
navegacion.className = 'navegacion'


let principal = 'Vestidos de baño'

let crear_navegacion = (menu_items) => {

	let items_nav;

	for (let i = 0; i < menu_items.length; i++) {

		let hipervinculo = document.createElement("a")
		hipervinculo.className = 'link_a';
		hipervinculo.href = `${menu_items[i].toLowerCase()}.html`

		items_nav = menu_items[i]

		if (items_nav === 'index') {
			items_nav = principal
		}

		let li_item = document.createElement("li")
		li_item.className = 'link_li';
		li_item.appendChild(document.createTextNode(items_nav))

		navegacion.appendChild(hipervinculo).appendChild(li_item)
	}
};

crear_navegacion(data_menu);

nav_container.append(
	navegacion,
	boton,
)
