//ローディング画面
const loading = document.querySelector('#loading');

window.addEventListener('load',() => {
  loading.classList.add('loaded');
});

//heroクラスの背景を変更
const hero = document.querySelector('.hero');

if (hero) {
  const images = [
    'img/hero-background1.png',
    'img/hero-background2.png',
    'img/hero-background3.png',
  ];
  let current = 0;

  function changeBackground() {
    hero.style.backgroundImage = `url('${images[current]}')`;
  //最後の背景を最初の背景に戻す
    current = (current + 1) % images.length;
  }

  // 最初に1回実行して、以降は一定時間ごとに実行
  changeBackground();
  setInterval(changeBackground, 5000);
}

//goodsの表示
const menu = document.querySelector('#goods');
if (menu) {
  const lists = [
    {
      name: '男性用水着（子供）',
      img: 'goods-1.png',
      price: '3,000',
      category: '水着',
    },
    {
      name: '女性用水着（子供）',
      img: 'goods-2.png',
      price: '5,000',
      category: '水着',
    },
    {
      name: '男性用水着（大人）',
      img: 'goods-3.png',
      price: '3,500',
      category: '水着',
    },
    {
      name: '女性用水着（大人）',
      img: 'goods-4.png',
      price: '5,500',
      category: '水着',
    },
    {
      name: 'セーム',
      img: 'goods-5.png',
      price: '2,000',
      category: 'アクセサリー',
    },
    {
      name: 'キャップ',
      img: 'goods-6.png',
      price: '1,000',
      category: 'アクセサリー',
    },
    {
      name: 'ゴーグル',
      img: 'goods-7.png',
      price: '3,000',
      category: 'アクセサリー',
    },
    {
      name: '曇り止め',
      img: 'goods-8.png',
      price: '400',
      category: 'アクセサリー',
    },
    {
      name: 'プルブイ',
      img: 'goods-9.png',
      price: '800',
      category: '練習用具',
    },
    {
      name: 'パドル',
      img: 'goods-10.png',
      price: '1,200',
      category: '練習用具',
    },
    {
      name: 'フィン',
      img: 'goods-11.png',
      price: '2,000',
      category: '練習用具',
    },
    {
      name: 'バスタオル',
      img: 'goods-12.png',
      price: '1,200',
      category: 'アクセサリー',
    },
  ];
function showItems(category) {
  //表示をリセット
  menu.innerHTML = '';
  for (let i = 0; i < lists.length; i++) {
    const item = lists[i];

    if (category === 'すべて' || item.category === category) {
      // 商品カードの親div
      //HTMLの <div> タグを新しく作る命令
      const div = document.createElement('div');
      //CSS用のクラス名 'goods'を付与
      div.className = 'goods';

      // スタイルを直接指定
      div.style.backgroundColor = '#edfbff';
      div.style.borderRadius = '8px';
      div.style.padding = '16px';
      div.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
      div.style.marginBottom = '20px';
      div.style.width = '300px';

      // 商品画像
      const img = document.createElement('img');
      img.src = `img/${item.img}`;
      img.alt = item.name;
      img.style.width = '100%';
      img.style.height = 'auto';
      img.style.objectFit = 'cover';
      img.style.borderRadius = '8px';

      // 商品名
      const h2 = document.createElement('h2');
      h2.textContent = item.name;
      h2.style.marginTop = '6px';
      h2.style.fontSize = '24px';
      h2.style.fontWeight = '550';
      h2.style.textShadow = '1px 1px 2px rgba(0, 0, 0, 0.15)';

      // 価格
      const p = document.createElement('p');
      p.textContent = item.price + '円';
      p.style.color = 'rgb(224, 47, 47)';
      p.style.fontWeight = '800';

      // 各要素を親divに追加
      div.appendChild(img);
      div.appendChild(h2);
      div.appendChild(p);

      // #goods に追加
      menu.appendChild(div);
    }
  }
}

// 初期表示（すべて）
showItems('すべて');

// フィルターボタン処理
const filterButtons = document.querySelectorAll('#filters button');
//filterButtons に入っている「すべてのボタン」を、1つずつ取り出して、button という名前で使えるようにする
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    //HTMLタグの中の data-filter="〇〇" を JavaScriptで読み取る
    const selected = button.getAttribute('data-filter');
    showItems(selected);
  });
});
}


//ダークモードの切替

const btn = document.querySelector('#btn-dark');

const whiteRGB = 'rgb(255, 255, 255)';
const lightBlueRGB = 'rgb(237, 251, 255)';
const blackRGB = 'rgb(0, 0, 0)';
const darkGrayRGB = 'rgb(31, 33, 33)';
const whiteText = 'rgb(255, 255, 255)';
const blackText = 'rgb(0, 0, 0)';
//初期はライトモード
let darkMode = false;

btn.addEventListener('click', () => {
  //モードの反転
  darkMode = !darkMode;
  //条件式（三項演算子）
  btn.textContent = darkMode ? 'ライトモード' : 'ダークモード';
  //ページ内のすべての HTML 要素を取得し、el という変数に入れる
  document.querySelectorAll('*').forEach(el => {
    //getComputedStyle() は「ブラウザが計算した最終的なスタイル」を返す
    const bg = getComputedStyle(el).backgroundColor;
    const textColor = getComputedStyle(el).color;

    if (darkMode) {
      if (bg === whiteRGB) {
        el.style.backgroundColor = blackRGB;
        el.style.color = whiteText;
      } else if (bg === lightBlueRGB) {
        el.style.backgroundColor = darkGrayRGB;
        el.style.color = whiteText;
      }
    } else {
      if (el.style.backgroundColor === blackRGB) {
        el.style.backgroundColor = whiteRGB;
        el.style.color = blackText;
      } else if (el.style.backgroundColor === darkGrayRGB) {
        el.style.backgroundColor = lightBlueRGB;
        el.style.color = blackText;
      }
    }
  });
});

//FAQの展開
document.querySelectorAll('#faq .question').forEach(button => {
  button.addEventListener('click', () => {
    //親要素（HTMLタグ） を取得
    const faqItem = button.parentElement;
    //'active' クラスを つけたり外したりする
    faqItem.classList.toggle('active');
  });
});
