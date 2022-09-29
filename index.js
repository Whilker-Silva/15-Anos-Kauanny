function clickMenu() {

    if (itens.style.display == 'block') {
        itens.style.display = 'none'
    }

    else {
        itens.style.display = 'block'
        burguer.style.backgroundcolor = '#f3e6fc'
    }
}

function mudouTamanho() {
    if (window.innerWidth > 768) {
        itens.style.display = 'block'
    }

    else {
        itens.style.display = 'none'
    }
}

function clickVideo() {
    videoConvite.style.backgroundcolor = 'green'
}