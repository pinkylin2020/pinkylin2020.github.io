export const footer = document.createElement('footer')

const container = document.createElement('div')
container.className = 'footer'

container.innerHTML = `
    <div class="footer_container">
        <div class="mulish" style="font-size:1.5rem">Encuentranos ubicados en la Cra 21 # 8 - 82 Local 106 cc Nataly Sanandresito San José</div>
        <div style="margin: 1em 0 0 0 "> Creada por @crkjalive 
        <strong><a target="_blank" href="http://www.instagram.com/crkjalive">Instagram</a></strong> 
        <strong><a target="_blank" href="https://www.tiktok.com/@crkjalive">Tiktok</a></strong> 😎👍 2025
        </div>
        <div> © Todos los derechos reservados</div>
    </div>
`

footer.append(container)