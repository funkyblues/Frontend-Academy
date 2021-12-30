const ajax = new XMLHttpRequest();

// false : 비동기가 아닌, 동기적으로 처리하겠다는 의미의 코드
ajax.open("GET", "https://api.hnpwa.com/v0/news/1.json", false);

// ajax.send()를 호출하면 데이터를 가져옴
ajax.send();

// 데이터는 ajax의 response라는 곳에 들어있다.