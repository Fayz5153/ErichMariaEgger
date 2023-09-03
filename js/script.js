// questions
const answer = document.querySelectorAll(".answer")
const answer__text = document.querySelectorAll(".answer__text")
const question = document.querySelectorAll(".question")

if (question) {
  for (let i = 0; i < question.length; i++) {
    let answer_height = answer__text[i].clientHeight
    // console.log(answer_height)
    question[i].onclick = () =>{
      console.log(answer[i].childNodes[1].clientHeight)
      question[i].classList.toggle("answer__show")
      if (question[i].classList.contains("answer__show")) {
        answer[i].style = `height: ${answer_height + 20}px;`
      } else{
        answer[i].style = `height: 0px;`
      }
    }
  }
}

// Swipers

let swiper;
function SwiperInit() {
    
    swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        spaceBetween: 23,
        navigation: {
        nextEl: ".swiper-button-next1",
        prevEl: ".swiper-button-prev1",
        },
        breakpoints:{
        10: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1440: {
            slidesPerView: 4,
            spaceBetween: 23,
        },
        }
    });
    
}
SwiperInit()

var swiper2 = new Swiper(".mySwiper2", {
pagination: {
    el: ".swiper-pagination2",
    type: "fraction",
},
navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
},
});


let collect__text = [
    "Luna Unsere CLIO ist ein luftig-leichter Ring mit einer sechs-krappigen Fassung und mit einem Diamant im Brillantschliff. Die offene Galerie sorgt für einen harmonischen Übergang zwischen dem Ring und den Stein und sorgt so für einen eleganten und femininen Look. CLIO kann entweder schlicht als klassischer Solitärring getragen werden oder auch mit zusätzlichen Paveé-Diamanten in der Ringschiene für einen noch glänzenderen und feminineren Look.",
    "Athena Unsere CLIO ist ein luftig-leichter Ring mit einer sechs-krappigen Fassung und mit einem Diamant im Brillantschliff. Die offene Galerie sorgt für einen harmonischen Übergang zwischen dem Ring und den Stein und sorgt so für einen eleganten und femininen Look. CLIO kann entweder schlicht als klassischer Solitärring getragen werden oder auch mit zusätzlichen Paveé-Diamanten in der Ringschiene für einen noch glänzenderen und feminineren Look.",
    "Kate Unsere CLIO ist ein luftig-leichter Ring mit einer sechs-krappigen Fassung und mit einem Diamant im Brillantschliff. Die offene Galerie sorgt für einen harmonischen Übergang zwischen dem Ring und den Stein und sorgt so für einen eleganten und femininen Look. CLIO kann entweder schlicht als klassischer Solitärring getragen werden oder auch mit zusätzlichen Paveé-Diamanten in der Ringschiene für einen noch glänzenderen und feminineren Look.",
    "Camilla Unsere CLIO ist ein luftig-leichter Ring mit einer sechs-krappigen Fassung und mit einem Diamant im Brillantschliff. Die offene Galerie sorgt für einen harmonischen Übergang zwischen dem Ring und den Stein und sorgt so für einen eleganten und femininen Look. CLIO kann entweder schlicht als klassischer Solitärring getragen werden oder auch mit zusätzlichen Paveé-Diamanten in der Ringschiene für einen noch glänzenderen und feminineren Look.",
    "Clio Unsere CLIO ist ein luftig-leichter Ring mit einer sechs-krappigen Fassung und mit einem Diamant im Brillantschliff. Die offene Galerie sorgt für einen harmonischen Übergang zwischen dem Ring und den Stein und sorgt so für einen eleganten und femininen Look. CLIO kann entweder schlicht als klassischer Solitärring getragen werden oder auch mit zusätzlichen Paveé-Diamanten in der Ringschiene für einen noch glänzenderen und feminineren Look.",
    "Ava Unsere CLIO ist ein luftig-leichter Ring mit einer sechs-krappigen Fassung und mit einem Diamant im Brillantschliff. Die offene Galerie sorgt für einen harmonischen Übergang zwischen dem Ring und den Stein und sorgt so für einen eleganten und femininen Look. CLIO kann entweder schlicht als klassischer Solitärring getragen werden oder auch mit zusätzlichen Paveé-Diamanten in der Ringschiene für einen noch glänzenderen und feminineren Look.",
    "Specials Unsere CLIO ist ein luftig-leichter Ring mit einer sechs-krappigen Fassung und mit einem Diamant im Brillantschliff. Die offene Galerie sorgt für einen harmonischen Übergang zwischen dem Ring und den Stein und sorgt so für einen eleganten und femininen Look. CLIO kann entweder schlicht als klassischer Solitärring getragen werden oder auch mit zusätzlichen Paveé-Diamanten in der Ringschiene für einen noch glänzenderen und feminineren Look.",
]
let collect__data1 = [
    {
        img:"./assets/img/ring1-min.png",
        text1 :"750/- Gelbgold",
        text2 :"Brillant ab 0,25ct. G-VS2 mit GIA-Zertifikat",
        text3 :"Steinbesatz mit 12 Brillanten 0,12ct.",
        price:"ab € 2.000,-"
    },
    {
        img:"./assets/img/ring3-min.png",
        text1 :"750/- Gelbgold",
        text2 :"Brillant ab 0,25ct. G-VS2 mit GIA-Zertifikat",
        text3 :"Steinbesatz mit 12 Brillanten 0,12ct.",
        price:"ab € 4.300,-"
    },
    {
        img:"./assets/img/ring2-min.png",
        text1 :"750/- Gelbgold",
        text2 :"Brillant ab 0,25ct. G-VS2 mit GIA-Zertifikat",
        text3 :"Steinbesatz mit 12 Brillanten 0,12ct.",
        price:"ab € 2.000,-"
    },
    {
        img:"./assets/img/ring3-min.png",
        text1 :"750/- Gelbgold",
        text2 :"Brillant ab 0,25ct. G-VS2 mit GIA-Zertifikat",
        text3 :"Steinbesatz mit 12 Brillanten 0,12ct.",
        price:"ab € 4.300,-"
    },
    {
        img:"./assets/img/ring2-min.png",
        text1 :"750/- Gelbgold",
        text2 :"Brillant ab 0,25ct. G-VS2 mit GIA-Zertifikat",
        text3 :"Steinbesatz mit 12 Brillanten 0,12ct.",
        price:"ab € 2.000,-"
    },
]
let collect__data2 = [
    {
        img:"./assets/img/ring3-min.png",
        text1 :"750/- Gelbgold",
        text2 :"Brillant ab 0,25ct. G-VS2 mit GIA-Zertifikat",
        text3 :"Steinbesatz mit 12 Brillanten 0,12ct.",
        price:"ab € 2.000,-"
    },
    {
        img:"./assets/img/ring2-min.png",
        text1 :"750/- Gelbgold",
        text2 :"Brillant ab 0,25ct. G-VS2 mit GIA-Zertifikat",
        text3 :"Steinbesatz mit 12 Brillanten 0,12ct.",
        price:"ab € 4.300,-"
    },
    {
        img:"./assets/img/ring3-min.png",
        text1 :"750/- Gelbgold",
        text2 :"Brillant ab 0,25ct. G-VS2 mit GIA-Zertifikat",
        text3 :"Steinbesatz mit 12 Brillanten 0,12ct.",
        price:"ab € 2.000,-"
    },
    {
        img:"./assets/img/ring1-min.png",
        text1 :"750/- Gelbgold",
        text2 :"Brillant ab 0,25ct. G-VS2 mit GIA-Zertifikat",
        text3 :"Steinbesatz mit 12 Brillanten 0,12ct.",
        price:"ab € 2.000,-"
    },
    {
        img:"./assets/img/ring3-min.png",
        text1 :"750/- Gelbgold",
        text2 :"Brillant ab 0,25ct. G-VS2 mit GIA-Zertifikat",
        text3 :"Steinbesatz mit 12 Brillanten 0,12ct.",
        price:"ab € 2.000,-"
    },
]

let collection__a = document.querySelectorAll(".collection__name a")
let c__d = document.querySelector(".collection__description")

for (let i = 0; i < collection__a.length; i++) {
    collection__a[i].onclick = () =>{
        for (let a = 0; a < collection__a.length; a++) {
            collection__a[a].classList.remove("collection__active")
            collection__a[i].classList.add("collection__active")
            
        }
        if (i % 2 === 0) {
            addSwiper(collect__data1)
        } else{
            addSwiper(collect__data2)
        }
        c__d.innerHTML = collect__text[i]
    }
}
let wrapper_collection = document.querySelector(".wrapper_collection")
function addSwiper(item) {
    console.log(item)
    wrapper_collection.innerHTML = ""
    swiper.slideTo(0, 0);
    item.map((i)=>{
        let div = document.createElement("div")
        div.setAttribute("class", "swiper-slide collection__card")

        let img = document.createElement("img")
        img.setAttribute("src", i.img)
        img.setAttribute("alt", "img")

        let p1 = document.createElement("p")
        p1.setAttribute("class", "collection__card__title")
        p1.textContent = i.text1

        let p2 = document.createElement("p")
        p2.setAttribute("class", "collection__card__title")
        p2.textContent = i.text2

        let p3 = document.createElement("p")
        p3.setAttribute("class", "collection__card__title")
        p3.textContent = i.text3

        let p4 = document.createElement("p")
        p4.setAttribute("class", "collection__card__title")
        p4.textContent = i.price

        div.append(img,p1,p2,p3,p4)

        wrapper_collection.append(div)
    })
    SwiperInit()
}