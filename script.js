itemlist = {
    'ramen': {'value': 1500, 'name': '컵라면'},
    'hamburger': {'value': 3000, 'name': '불고기 버거'},
    'bigmac': {'value': 6000, 'name': '빅맥 버거'},
    'nitroclsyr': {'value': 2000000, 'name': '노트북'},
    'vultr': {'value': 200000, 'name': '핸드폰'},
    'house': {'value': 300000000, 'name': '집'}
}

const value = document.getElementsByClassName('items')[0]

for (item in itemlist) {
    o = document.createElement('option')
    o.text = itemlist[item]['name']
    o.value = item
    value.options.add(o)
}

function change_item() {
    kukbaps = (itemlist[value.value]['value'] - itemlist[value.value]['value'] % 3000) / 3000
    const name = value.options[value.selectedIndex].text
    document.getElementsByClassName('result')[0].innerHTML = `<h2>${name}<br>을 살바에는 차라리 국밥 <br>${kukbaps.toString()}<br> 그릇을 먹겠다!</h2>`
}
