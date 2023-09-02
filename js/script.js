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
        // answer[i].style = `height: ${answer_height + answer[i].childNodes[1].clientHeight - 5}px;`
      } else{
        answer[i].style = `height: 0px;`
      }
    }
  }
}


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
]
let collect__data2 = [
    {
        img:"./assets/img/ring1-min.png",
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
]

// let collection__a = document.querySelectorAll(".collection__name a")
let c__d = document.querySelector(".collection__description")
// console.log(collection__a)
// for (let i = 0; i < collection__a.length; i++) {
//     // console.log(i)
//     collection__a[i].onclick = () =>{
//         console.log(collection__a[i])
//         c__d.innerText = collect__text[i]
//     }
// }

let selectedDiv;
const collection__name = document.querySelector(".collection__name")

collection__name.onclick = function(event) {
    let target = event.target; // где был клик?
    // console.log(target)

    if (target.tagName != 'A') return; // не на TD? тогда не интересует

    highlight(target); // подсветить TD
};

function highlight(div) {
    if (selectedDiv) { // убрать существующую подсветку, если есть
    selectedDiv.classList.remove('collection__active');
    }
    selectedDiv = div;
    selectedDiv.classList.add('collection__active'); // подсветить новый td
}