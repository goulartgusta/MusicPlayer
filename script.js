var anteriror = document.querySelector('#anterior');
var play = document.querySelector('#play');
var proxima = document.querySelector('#proxima');
var titulo = document.querySelector('#musica-nome');
var mudaVolume = document.querySelector('#volume')
var slider = document.querySelector('#duracao-musica');
var show_duration = document.querySelector('#show_duration');
var buscaImage = document.querySelector('#track-imagem');
var atualMusic = document.querySelector('#atual');
var artista = document.querySelector('#artista');
var totalMusic = document.querySelector('#total-musica');
var favoritando = document.querySelector('#favorito');
var auto_play = document.querySelector('#atualizar');
var reiniciando = document.querySelector('#reiniciar');
var buscaLetras = document.querySelector('#lyrics');

var tempo;
var autoplay = 0;
var reinicia = 0;

var index_no = 0;
var playingMusica = false;

var musica = document.createElement('audio');

var allMusics = [
    {
        nome: "Sunflower",
        path: "assets/music/music1.mp3",
        img: "assets/img/img1.jpg",
        artista: "Post Malone, Swae Lee",
    },

    {
        nome: "Overthinker",
        path: "assets/music/music2.mp3",
        img: "assets/img/img2.png",
        artista: "INZO",
    },

    {
        nome: "505",
        path: "assets/music/music3.mp3",
        img: "assets/img/img3.webp",
        artista: "Arctic Monkeys",
    },

    {
        nome: "Demons",
        path: "assets/music/music4.mp3",
        img: "assets/img/img4.jpg",
        artista: "Imagine Dragons",
    },

    {
        nome: "Caminhos",
        path: "assets/music/music5.mp3",
        img: "assets/img/img5.jpg",
        artista: "BK",
    },
    {
        nome: "Young Dumb & Broke",
        path: "assets/music/music6.mp3",
        img: "assets/img/img6.jpg",
        artista: "Khalid",
    },


    {
        nome: "Me MySelf & I",
        path: "assets/music/music7.mp3",
        img: "assets/img/img7.jpg",
        artista: "G-Eazy e Bebe Rexha",
    },

    {
        nome: "Starboy",
        path: "assets/music/music8.mp3",
        img: "assets/img/img8.webp",
        artista: "The Weeknd",
    },

    {
        nome: "Hymn For The Weekend",
        path: "assets/music/music9.mp3",
        img: "assets/img/img9.jpg",
        artista: "Coldplay",
    },

    {
        nome: "Ain't no Rest for the Wicked",
        path: "assets/music/music10.mp3",
        img: "assets/img/img10.jpg",
        artista: "Cage the Elephant",
    }

];

function carregar_musica(index_no) {
    clearInterval(tempo);
    reset_slider();
    musica.src = allMusics[index_no].path;
    titulo.innerHTML = allMusics[index_no].nome;
    buscaImage.src = allMusics[index_no].img;
    artista.innerHTML = allMusics[index_no].artista;
    musica.load();

    totalMusic.innerHTML = allMusics.length;
    atualMusic.innerHTML = index_no + 1;

    tempo = setInterval(range_slider, 1000);
}

carregar_musica(index_no);

function reset_slider() {
    slider.value = 0;
}

function muta_musica() {
    musica.volume = 0;
    volume.value = 0;
}

function just_play() {
    if (playingMusica == false) {
        playsong();
    }
    else {
        pausesong();
    }
}

function playsong() {
    musica.play();
    playingMusica = true;
    play.innerHTML = '<i class="fa fa-pause"></i>';
}

function pausesong() {
    musica.pause();
    playingMusica = false;
    play.innerHTML = '<i class="fa fa-play"></i>';
}

function proxima_musica() {
    if (index_no < allMusics.length - 1) {
        index_no += 1;
        carregar_musica(index_no);
        playsong();
    }
}

function voltar_musica() {
    if (index_no > 0) {
        index_no -= 1;
        carregar_musica(index_no);
        playsong();
    } else {
        index_no = allMusics.length;
        carregar_musica(index_no);
        playsong();
    }
}

function muda_volume() {
    musica.volume = mudaVolume.value / 100;
}

function muda_duracao() {
    slider_positon = musica.duration * (slider.value / 100);
    musica.currentTime = slider_positon;
}

function range_slider() {
    let position = 0;

    if (!isNaN(musica.duration)) {
        position = musica.currentTime * (100 / musica.duration);
        slider.value = position;
    }

    if (musica.ended) {
        play.innerHTML = '<i class="fa fa-play"></i>';
        if (reinicia == 1) {
            index_no - 1;
            carregar_musica(index_no);
            playsong();
        }
    }

    if (musica.ended) {
        play.innerHTML = '<i class="fa fa-play"></i>';
        if (autoplay == 1) {
            index_no++;
            carregar_musica(index_no);
            playsong();
        }
    }
}

function autoplay_trocar() {
    if (autoplay == 1) {
        autoplay = 0;
        auto_play.style.background = "rgba(245, 245, 245, 0.1)";
    } else {
        autoplay = 1;
        reinicia = 0;
        reiniciando.style.background = "rgba(245, 245, 245, 0.1)";
        auto_play.style.background = "#DE3163";
    }
}

function reiniciar_musica() {
    if (reinicia == 1) {
        reinicia = 0;
        reiniciando.style.background = "rgba(245, 245, 245, 0.1)";
    } else {
        reinicia = 1;
        autoplay = 0;
        auto_play.style.background = "rgba(245, 245, 245, 0.1)";
        reiniciando.style.background = "#DE3163";
    }
}