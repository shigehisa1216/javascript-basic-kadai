// btnというidを持つHTML要素を取得し、定数に代入する
const Btn = document.getElementById('btn');
const Text = document.getElementById('text');

Btn.addEventListener('click', () => {
  setTimeout(() => {  
    text.textContent = 'ボタンをクリックしました';
   }, 2000)
});
