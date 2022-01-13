const toggles = document.querySelectorAll('.toggle')
const good = document.querySelector('#good')
const cheap = document.querySelector('#cheap')
const fast = document.querySelector('#fast')

toggles.forEach(toggle => toggle.addEventListener('change', (e) => doTheTrick(e.target)))

function doTheTrick(checked) {
    if(good.checked && cheap.checked && fast.checked) {
        if(good === checked) {
            fast.checked = false
        }

        if(cheap === checked) {
            good.checked = false
        }

        if(fast === checked) {
            cheap.checked = false
        }
    }
}