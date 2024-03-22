const pushBtn = document.getElementById('btn');

pushBtn.addEventListener('click', () =>{
  const afterTxt = document.getElementById('text');

  setTimeout( () =>{
    afterTxt.textContent = 'ボタンをクリックしました';
  },2000);
  
});