const ajax = new XMLHttpRequest();
const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json";

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

for(let i = 0; i < 10; i++) {
  const li = document.createElement("li");
  li.innerHTML = newsFeed[i].title;
  ul.appendChild(li);
}

document.getElementById("root").appendChild(ul);


// document.getElementById('root').innerHTML = `<ul>
//   <li>${newsFeed[0].title}</li>
//   <li>${newsFeed[1].title}</li>
//   <li>${newsFeed[2].title}</li>
// </ul>`;