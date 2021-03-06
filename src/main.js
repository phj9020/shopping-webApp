

// Fetch the item from the JSON file
function loadItems() {
  return fetch("data/data.json")
    .then((response) => response.json()) // 성공적이면 response를 json으로 변환
    .then((json) => json.items); // json 안에 있는 items 를 리턴한다
}

// Update the list with the given items 
function displayItems(items) {
  const containter = document.querySelector(".items");
  containter.innerHTML = items.map((item) => createHTMLString(item)).join(''); // json item 을 html 요소롤 변환  & 문자열이 들어있는 배열을 하나로 병합 join('');
}


// Create HTML list item from the given data item
function createHTMLString(item) {
  return `
  <li class="item">
    <img src="${item.image}" alt="${item.type}" class="item__thumbnail" />
    <span class="item__description">${item.gender}, ${item.size}</span>
  </li>`;
}

function onButtonClick(event, items){
    const dataset = event.target.dataset;
    const key = dataset.key;
    const value = dataset.value;
    // buttons 컨테이너 안에 key, value 값이 존재하지 않다면 아무 것도 return 하지 않는다
    if (key === null || value === null ){
        return;
    }
    
    const filtered = items.filter((item) => item[key] === value);
    displayItems(filtered);
}

//이벤트 위임
function setEventListeners(items){
    const logo = document.querySelector('.logo');
    const button = document.querySelector('.buttons');
    logo.addEventListener("click", () => displayItems(items));
    button.addEventListener("click", (event) => onButtonClick(event, items));
}

// main 아이템을 동적으로 받아온다
function init(){
loadItems()
  .then((items) => {
    // 성공적으로 받아왔을 시 // promise
    displayItems(items);
    setEventListeners(items);
  })
  .catch(console.log);
}

init();


