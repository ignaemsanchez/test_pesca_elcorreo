const step1 = document.getElementById('step1')
const img1 = document.getElementById('img1')
const img2 = document.getElementById('img2')
const img3 = document.getElementById('img3')
const img4 = document.getElementById('img4')

console.log(step1.getBoundingClientRect())



document.addEventListener('scroll', ()=>{
    if(step1.getBoundingClientRect().top < -39.80000305175781 && step1.getBoundingClientRect().top > -1025.800048828125) {
        img2.classList.add('showOpacity')
        setTimeout(()=>{
            img1.classList.remove('showOpacity')
        }, 400)
    }else if (step1.getBoundingClientRect().top > -39.80000305175781) {
        img1.classList.add('showOpacity')
        setTimeout(()=>{
            img2.classList.remove('showOpacity')
        },400)
    }
    if (step1.getBoundingClientRect().top < -1025.800048828125 && step1.getBoundingClientRect().top > -2040.800048828125) {
        img3.classList.add('showOpacity')
        setTimeout(()=>{
            img2.classList.remove('showOpacity')
        }, 400)
    }else if ( step1.getBoundingClientRect().top > -1025.800048828125 && step1.getBoundingClientRect().top < -39.80000305175781 ) {
        img2.classList.add('showOpacity')
        setTimeout(()=>{
            img3.classList.remove('showOpacity')
        }, 400)
    }

    if(step1.getBoundingClientRect().top < -2040.800048828125 ) {
        img4.classList.add('showOpacity')
        setTimeout(()=>{
            img3.classList.remove('showOpacity')
        }, 400)
    }else if (step1.getBoundingClientRect().top > -2040.800048828125 && step1.getBoundingClientRect().top < -1025.800048828125) {
        img3.classList.add('showOpacity')
        setTimeout(()=>{
            img4.classList.remove('showOpacity')
        }, 400)
    }

})