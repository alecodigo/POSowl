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

}
ProductScreen.template = xml/* xml */`
    <div class="product-display">
        <p>ProductScreen</p>
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