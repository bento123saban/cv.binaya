let kategori = 0
const katList = document.querySelector('.kategori-list')
const katIcon = document.querySelector('.kategori-link i')
window.addEventListener('click', function(e) {
    if (e.target.matches('.kategori')) {
        if (kategori == 0) {
            katList.style.display = 'block'
            katIcon.style.transform = 'rotate(90deg)'
            kategori = 1
        } else {
            katList.style.display = 'none'
            katIcon.style.transform = 'rotate(0deg)'
            kategori = 0
        }
    } else if (e.target.matches('.kat-cat')) {
        const kategori = e.target.textContent
        katList.style.display = 'none'
        katIcon.style.transform = 'rotate(0deg)'
        cariKategor(kategori.toLowerCase())
    }

    else {
        katList.style.display = 'none'
        katIcon.style.transform = 'rotate(0deg)'
        kategori = 0
    }
})

function cariKategor(kategori) {
    document.querySelectorAll('.card').forEach(card => {
        if (card.getAttribute('data-kategori').toLowerCase() !== kategori) {
            card.style.display = 'none'
        } else {
            card.style.display = 'block'
        }
    })
    console.log(kategori)
}
window.addEventListener('scroll', function(e) {
	showHideNav()
})

// navbar script 
let prevScrollpos = window.pageYOffset;
// show and hide navbar
function showHideNav() {
	let currentScrollPos = window.pageYOffset;
	if (prevScrollpos > currentScrollPos) {
		document.getElementById("navbar").style.top = "0";
	} else {
		document.getElementById("navbar").style.top = "-65px";
	}
	prevScrollpos = currentScrollPos;
}

document.querySelector('#search').onkeyup = function() {
    const input = this.value.toLowerCase()
    document.querySelectorAll('.card').forEach(item => {
        item.getAttribute("data-nama").toUpperCase().indexOf(input) > -1 ? item.style.display = "" : item.style.display = "none"
    })
}
