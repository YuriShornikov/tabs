const tab = document.querySelectorAll('.tab')
const tab__content = document.querySelectorAll('.tab__content')

tab.forEach((element_tab, index_tab) => {
    element_tab.addEventListener('click', () => {
        tab.forEach(i => i.classList.remove('tab_active'))
        tab__content.forEach((element_tabc, index_tabc) => {
            if (index_tab === index_tabc) {
                tab__content.forEach(j => j.classList.remove('tab__content_active'))
                element_tab.classList.add('tab_active')
                element_tabc.classList.add('tab__content_active')
            }
        })
    })
})