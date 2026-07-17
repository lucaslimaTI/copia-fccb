/*==================================================
                SLIDER FCCB
==================================================*/

const slides = document.querySelectorAll(".slide");

const dots = document.querySelectorAll(".dot");

const next = document.querySelector(".next");

const prev = document.querySelector(".prev");

let atual = 0;

function mostrarSlide(indice){

    slides.forEach(slide=>{

        slide.classList.remove("active");

    });


    dots.forEach(dot=>{

        dot.classList.remove("active");

    });


    slides[indice].classList.add("active");


    if(dots[indice]){

        dots[indice].classList.add("active");

    }


    atual = indice;

}
next.onclick = function(){

    atual++;

    if(atual >= slides.length){

        atual=0;

    }

    mostrarSlide(atual);

    reiniciarSlider();

}

prev.onclick = function(){

    atual--;

    if(atual < 0){

        atual = slides.length-1;

    }

    mostrarSlide(atual);

    reiniciarSlider();

}

dots.forEach(function(dot,index){

    dot.onclick=function(){

        mostrarSlide(index);

        reiniciarSlider();

    }

});


let tempoSlider;


function iniciarSlider(){

    tempoSlider = setInterval(()=>{

        atual++;

        if(atual >= slides.length){

            atual = 0;

        }

        mostrarSlide(atual);


    },5000);

}


function reiniciarSlider(){

    clearInterval(tempoSlider);

    iniciarSlider();

}


iniciarSlider();

/*==================================================
            MENU MOBILE
==================================================*/

const menuMobile = document.querySelector(".menu-mobile");

const menuList = document.querySelector(".menu-list");

menuMobile.onclick = function(){

    menuList.classList.toggle("open");

}
/*==================================================
            CONTADOR
==================================================*/

const contadores = document.querySelectorAll(".contador");

let iniciou = false;

window.addEventListener("scroll",()=>{

    const secao = document.querySelector(".numeros");

    if(!secao) return;

    const topo = secao.getBoundingClientRect().top;

    if(topo < window.innerHeight - 120 && !iniciou){

        iniciou = true;

        contadores.forEach(contador=>{

            const alvo = Number(contador.dataset.numero);

            let atual = 0;

            const incremento = Math.max(1, Math.ceil(alvo / 80));

            const intervalo = setInterval(()=>{

                atual += incremento;

                if(atual >= alvo){

                    atual = alvo;

                    clearInterval(intervalo);

                }

                contador.innerHTML = atual.toLocaleString('pt-BR');

            },20);

        });

    }

});

/*==================================================
            BOTÃO TOPO
==================================================*/

const btnTopo = document.getElementById("voltarTopo");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 500){

        btnTopo.style.display="block";

    }else{

        btnTopo.style.display="none";

    }

});

btnTopo.onclick=function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}
/*==================================================
            SCROLL REVEAL
==================================================*/

const reveals=document.querySelectorAll(".reveal");

function aparecer(){

    reveals.forEach(item=>{

        const topo=item.getBoundingClientRect().top;

        if(topo<window.innerHeight-120){

            item.classList.add("active");

        }

    });

}

window.addEventListener("scroll",aparecer);

aparecer();