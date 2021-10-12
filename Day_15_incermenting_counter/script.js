const counters = document.querySelectorAll('.counter');
counters.forEach((counter) => {
    counter.innerText = '0';

    const updateCounter =() => {
        const target = +counter.getAttribute('data-target');
        const updateTargetBy = target / 200;
        const countertarget = +counter.innerText;

        if (countertarget < target) {
            counter.innerText = countertarget+ updateTargetBy;
            setTimeout(updateCounter, 1);
        }
    }

    updateCounter();
})