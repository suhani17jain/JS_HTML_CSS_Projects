const smallCups = document.querySelectorAll('.small-cup')
const liters = document.querySelector('.liters')
const percentage = document.querySelector('.percentage')
const remained = document.querySelector('.remained')

updateBigCup()

smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => fillCups(idx))
})

function fillCups(idx) {
    if (idx===7 && smallCups[idx].classList.contains("filled")) idx--;
    else if(smallCups[idx].classList.contains('filled') && !smallCups[idx].nextElementSibling.classList.contains('filled')) {
        idx--
    }

    smallCups.forEach((cup, index) => {
        if(index <= idx) {
            cup.classList.add('filled')
        } else {
            cup.classList.remove('filled')
        }
    })

    updateBigCup()
}

function updateBigCup() {
    const fullCups = document.querySelectorAll('.small-cup.filled').length
    const totalCups = smallCups.length

    if(fullCups === 0) {
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    } else {
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups / totalCups * 180}px`
        percentage.innerText = `${fullCups / totalCups * 100}%`
    }

    if(fullCups === totalCups) {
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    } else {
        remained.style.visibility = 'visible'
        liters.innerText = `${2 - (250 * fullCups / 1000)} L`
    }
}