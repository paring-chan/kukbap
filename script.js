itemlist = {
    'nitro': {'value': 10000, 'name': '디스코드 니트로 1개월'},
    'nitrocls': {'value': 6000, 'name': '디스코드 니트로 클래식 1개월'},
    'nitroyr': {'value': 100000, 'name': '디스코드 니트로 1년'},
    'nitroclsyr': {'value': 60000, 'name': '디스코드 니트로 클래식 1년'},
    'vultr': {'value': 6000, 'name': 'VULTR 기본 요금으로 호스팅 1달'}
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
