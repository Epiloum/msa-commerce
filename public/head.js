window.addEventListener('load', () => {
  const legacy = document.querySelector('body').innerHTML;
  const menu = [
    ["http://localhost:3001", '상품관리'],
    ["http://localhost:3002", '주문관리'],
    ["#", '재고관리'],
    ["#", '배송관리'],
    ["#", '상품관리']
  ];

  let menuHtml = '';
  let menuVisible = false;

  for(let v of menu) {
    menuHtml += '<li><a href="' + v[0] + '">' + v[1] + '</a></li>'
  }

  document.querySelector('body').innerHTML = '<nav><button>Menu</button><ul>' + menuHtml + '</ul></nav>' + legacy;
  document.querySelector('nav button').addEventListener('click', () => {
    document.querySelector('nav ul').style.display = menuVisible? 'none': 'block';
    menuVisible = !menuVisible;
  })
});
