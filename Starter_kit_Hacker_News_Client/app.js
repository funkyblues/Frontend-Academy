const container = document.getElementById("root");
const ajax = new XMLHttpRequest();
const content = document.createElement("div");
const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json";
//나중에 클릭했을 때 id를 결정해줘야 하므로, @으로 써서 마킹만 하는 것.
const CONTENTS_URL = "https://api.hnpwa.com/v0/item/@id.json";


// false : 비동기가 아닌, 동기적으로 처리하겠다는 의미의 코드
ajax.open("GET", NEWS_URL, false);

// ajax.send()를 호출하면 데이터를 가져옴
ajax.send();

// 데이터는 ajax의 response라는 곳에 들어있다.
// console.log(ajax.response);

// 네트워크를 통해 가져온 데이터를 어떻게 다뤄야 하나?
// 개발자도구
// XHR : XHLHttpRequest
// 네트워크를 가져온 항목들만 보여주는 필터라고 보면 됨
// 1.json 을 클릭하면 response에서 console.log한 내용과 동일한 내용을 보여줌!


//json 데이터를 객체로
const newsFeed = JSON.parse(ajax.response);
// console.log(newsFeed);

// ul태그 반환.
const ul = document.createElement("ul");

// 링크태그에 넣어둔 해시(hash)를 변경하는 함수를 사용하겠다!
// 자바스크립트 자체가 함수를 값으로 취급해서 함수한테 전달할 수 있기 때문에 이렇게 작성한다.
window.addEventListener("hashchange", function () {
  // 받고자 하는 위치의 hash를 가져오는데, substr를 사용해서 첫번째 위치부터 가져오겠다는 뜻
  const id = location.hash.substr(1);

  ajax.open("GET", CONTENTS_URL.replace('@id', id), false);
  ajax.send();

  const newsContents = JSON.parse(ajax.response);
  const title = document.createElement("h1");

  title.innerHTML = newsContents.title;
  content.appendChild(title);
  console.log(newsContents);
})


for(let i = 0; i < 10; i++) {
  const li = document.createElement("li");
  const a = document.createElement("a");
   
  a.href = `#${newsFeed[i].id}`;
  a.innerHTML = `${newsFeed[i].title} ${newsFeed[i].comments_count}`;

  a.addEventListener("click", function () { })
  li.appendChild(a);
  ul.appendChild(li);
}



container.appendChild(ul);
container.appendChild(content);


// document.getElementById('root').innerHTML = `<ul>
//   <li>${newsFeed[0].title}</li>
//   <li>${newsFeed[1].title}</li>
//   <li>${newsFeed[2].title}</li>
// </ul>`;