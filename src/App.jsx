
import s from './App.module.css'

import img1 from '/Kd.png'
import img2 from '/KW.jpg'
import img3 from '/TT.webp'
import vid from '/video.png'
import home from '/home.png'
import cont from '/contact.png'
import box from '/box.png'


function App() {

const navTo = (id) => {
    const element = document.getElementById(id);

    if (element) {
        element.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }
};
  return (
    <>
    {/* <nav>

        <span className={s.navItems} onclick={() => navTo('s1')}>
            <img src={home} width="60px" alt="home"/>
            <i class="fa-solid fa-house"></i>
            <a className={s.navWords}>Home</a>
        </span>
        <span className={s.navItems} onclick={() => navTo('s2')}>
            <img src={box} width="60px" alt="home"/>
            <i class="fa-solid fa-box"></i>
            <a className={s.navWords}>Produtos</a>
        </span>
        <span className={s.navItems} onclick={() => navTo('s3')}>
            <img src={vid} width="60px" alt="vid"/>
            <i class="fa-solid fa-video"></i>
            <a className={s.navWords}>Video</a>
        </span>
        <span className={s.navItems} onclick={() => navTo('s4')}>
            <img src={cont} width="60px"  alt="cont"/>
            <i class="fa-solid fa-mobile"></i>
            <a className={s.navWords}>Contato</a>
        </span>
    </nav>  */}

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
            <div className={s.navItems}> 
            
            </div>
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#">Features</a>
        <a class="nav-link" href="#">Pricing</a>
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </div>
    </div>
  </div>
</nav>
 
    <main>
        <section id="s1">
            <h1>Home</h1>
            <h2>Alguma coisa po</h2>
 
            
            <div id="basketball-container"></div>
            <p id="bk-label">Kojima</p>
        </section>
 
        <section id="s2">
            <div className={s.card}>
                <img src={img1} width="300px" height="300px" alt="kd"/>
                <div>
                    <h4>Kevin Durão</h4>
                    <p></p>
                </div>
            </div>
            <div className={s.card}>
                <img src={img3} width="300px" height="300px" alt="tt"/>
                <div>
                    <h4>Tyler</h4>
                    <p></p>
                </div>
            </div>
            <div className={s.card}>
                <img src={img2} width="300px" height="300px" alt="kw"/>
                <div>
                    <h4>Kayne W</h4>
                    <p></p>
                </div>
            </div>
        </section>
 
        <section id="s3">
            <iframe className={s.vid} src="https://www.youtube.com/embed/I99mL8Y-lF4?si=Bek4pHaKOMWno4y3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </section>
 
        <section id="s4">
            <h3>CONTATO</h3>
            <div className={s.formulario}>
                <label for="nome">Nome:</label>
                <input type="text" id="nome" placeholder="Digite seu nome"/>
                <label for="assunto">Mensagem:</label>
                <textarea id="assunto" placeholder="Digite uma mensagem"></textarea>
                <div className={s.button}>
                    <button onclick={() => enviar()}>ENVIAR</button>
                </div> 
            </div>
        </section>
    </main>
 
    <footer>
        <a href="https://www.facebook.com/" target="_blank">
            <i class="fa-brands fa-facebook"></i>
        </a>
        <a href="https://www.instagram.com/" target="_blank">
            <i class="fa-brands fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/" target="_blank">
            <i class="fa-brands fa-linkedin"></i>
        </a>
    </footer>
    </>
  )
}

export default App
