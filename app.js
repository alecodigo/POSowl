const {Component, mount, xml, useState, useRef, onMounted } = owl;


class Header extends Component {

}
Header.template = xml/* xml */`
    <div class="header-container">
        <div class="header-order">
            <a role="boton" href="/">Orders</a>
        </div>
        <div class="header-menu">
            <i class="fa fa-bars" aria-hidden="true"></i>
        </div>
        <div class="header-product-search-bar">
            <form>
                <label for="search">
                    <span>Buscar</span>
                    <input id="search" name="phrase" placeholder="search product..."/>
                </label>
            </form>
            <div class="search-icon">
                <i class="glyphicon glyphicon-search"></i>
            </div>
        </div>
        <div class="header-sesion-container">
            <nav>
                <ul class="nav-right-section">
                    <li>Usuario</li>
                    <li><a role="button" href="/">Cerrar</a></li>
                </ul>
            </nav>
       </div>
    </div>
`;
class Buttons extends Component {

}
Buttons.template = xml/* xml */`
    <div class="btn-panel">
     <div class="btn">1</div>
     <div class="btn">2</div>
     <div class="btn">3</div>
     <div class="btn">4</div>
     <div class="btn">5</div>
     <div class="btn">6</div>
     <div class="btn">7</div>
     <div class="btn">8</div>
     <div class="btn">9</div>
     <div class="btn">0</div>
     <div class="btn">Enter</div>
     <div class="btn">Delete</div>
    </div>
`;

class Display extends Component {

}
Display.template = xml/* xml */`
    <div class="display">
        <p>Display</p>
    </div>
`;

class ProductScreen extends Component {
    products = [
        {
          id: 1,
          img: './src/img/coca-cola.png',
          name: 'Coca-Cola'
        },
        {
          id: 2,
          img: './src/img/pepsicola.png',
          name: 'Pepsicola'
        },
        {
            id: 3,
            img: './src/img/ruffles-queso.png',
            name: 'ruffles-queso.png',
        },
        {
            id: 4,
            img: './src/img/doritos.png',
            name: 'Doritos',
            description: '420 gr'
        },
        {
            id: 5,
            img: './src/img/harina-pan.png',
            name: 'Harina Pan',
            description: 'Harina de maíz pre-cocida'
        },
        {
            id: 6,
            img: './src/img/Harinadetrigo.png',
            name: 'Doña Emilia',
            description: 'Harina de trigo leudante'
        },
        {
            id: 7,
            img: './src/img/leche-La-Compania.png',
            name: 'Doña Emilia',
            description: 'Harina de trigo leudante'
        },
        {
            id: 8,
            img: './src/img/sardinas-salsa-tomate-margarita-170g.png',
            name: 'Sardinas en lata',
            description: 'sardinas en salsa tomate margarita 170g'
        },
        {
            id: 9,
            img: './src/img/frescolita.png',
            name: 'Frescolita',
            description: 'refresco frescolita 2Ltrs'
        },
        {
            id: 10,
            img: './src/img/Mortadela-750g.png',
            name: 'Doña Emilia',
            description: 'Mortadela en tripa roja PL 750g'
        },

      ];
}
ProductScreen.template = xml/* xml */`
    <div class="product-display">
        <div class="product-container">
        <t t-foreach="products" t-as="product" t-key="product.id">
            <img t-att-src="product.img"/>
        </t>
        </div>
        <div class="product-display-btn-box">
            <button class="btn-pay">PAY</button>
            <button class="btn-resume">RESUMEN</button>
        </div>
    </div>
`;

class MainScreen extends Component {
    static components = { Display,  Buttons, ProductScreen, Header};
}

MainScreen.template = xml/* xml */`
    <div class="main-container">
        <Header />
        <div class="pos-container">
            <div class="display-buttons-container">
                <Display />
                <Buttons />
            </div>
            <div class="product-screen-container">
                <ProductScreen />
            </div>
        </div>
    </div>
`;


mount(MainScreen, document.body, {dev: true})