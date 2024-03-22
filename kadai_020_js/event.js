const clicked = document.getElementById('btn');

clicked.addEventListener('click', () =>{
  const beforeText = document.getElementById('text');
  beforeText.textContent = 'ボタンをクリックしました';
})