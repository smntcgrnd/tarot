// TODO: 어차피 넘버링된 카드를 순서대로 노출시키면 되기 때문에, 함수를 스프레드 별로 분리하지 않아도 될 듯. 이후 리팩토링

// Four Spread
const handleFourSpread = (cardName) => {
    // 이미지 요소 생성
    const img = document.createElement('img');
    img.src = `../assets/cards/${cardName}.jpg`; // 파일 이름은 cardName 값과 연관
    img.alt = cardName; // 접근성을 위한 alt 속성 추가
    img.classList.add('card-image'); // 스타일을 위해 클래스 추가 가능

    // 카드 생성(버튼)
    const card =  document.createElement("button");
    card.classList.add('card');
    card.appendChild(img);

    // 카드 클릭 시 제거
    card.addEventListener('click', () => card.remove());

    // Four Spread Slots
    const slot_1 = document.querySelector("#slot_1");
    const slot_2 = document.querySelector("#slot_2");
    const slot_3 = document.querySelector("#slot_3");
    const slot_4 = document.querySelector("#slot_4");

    // 각 슬롯에 이미지 삽입
    if (slot_1.hasChildNodes() === false) {
        slot_1.appendChild(card);
    } else if (slot_2.hasChildNodes() === false) {
        slot_2.appendChild(card);
    } else if (slot_3.hasChildNodes() === false) {
        slot_3.appendChild(card);
    } else if (slot_4.hasChildNodes() === false) {
        slot_4.appendChild(card);
    } else {
        console.log("Full Cards")
    }
}

/* 5 Card
  - Two Choice
  - Timeline
* */

const handleFiveCardSpread = (cardName) => {
    // 이미지 요소 생성
    const img = document.createElement('img');
    img.src = `../assets/cards/${cardName}.jpg`; // 파일 이름은 cardName 값과 연관
    img.alt = cardName; // 접근성을 위한 alt 속성 추가
    img.classList.add('card-image'); // 스타일을 위해 클래스 추가 가능

    // 카드 생성(버튼)
    const card =  document.createElement("button");
    card.classList.add('card');
    card.appendChild(img);

    // 카드 클릭 시 제거
    card.addEventListener('click', () => card.remove());

    // Four Spread Slots
    const slot_1 = document.querySelector("#slot_1");
    const slot_2 = document.querySelector("#slot_2");
    const slot_3 = document.querySelector("#slot_3");
    const slot_4 = document.querySelector("#slot_4");
    const slot_5 = document.querySelector("#slot_5");

    // 각 슬롯에 이미지 삽입
    if (slot_1.hasChildNodes() === false) {
        slot_1.appendChild(card);
    } else if (slot_2.hasChildNodes() === false) {
        slot_2.appendChild(card);
    } else if (slot_3.hasChildNodes() === false) {
        slot_3.appendChild(card);
    } else if (slot_4.hasChildNodes() === false) {
        slot_4.appendChild(card);
    } else if (slot_5.hasChildNodes() === false) {
        slot_5.appendChild(card);
    } else {
        console.log("Full Cards")
    }
}

/* 10 Card
  - Celtic Cross
* */

const handleTenCardSpread = (cardName) => {
    // 이미지 요소 생성
    const img = document.createElement('img');
    img.src = `../assets/cards/${cardName}.jpg`; // 파일 이름은 cardName 값과 연관
    img.alt = cardName; // 접근성을 위한 alt 속성 추가
    img.classList.add('card-image'); // 스타일을 위해 클래스 추가 가능

    // 카드 생성(버튼)
    const card =  document.createElement("button");
    card.classList.add('card');
    card.appendChild(img);

    // 카드 클릭 시 제거
    card.addEventListener('click', () => card.remove());

    // Four Spread Slots
    const slot_1 = document.querySelector("#slot_1");
    const slot_2 = document.querySelector("#slot_2");
    const slot_3 = document.querySelector("#slot_3");
    const slot_4 = document.querySelector("#slot_4");
    const slot_5 = document.querySelector("#slot_5");
    const slot_6 = document.querySelector("#slot_6");
    const slot_7 = document.querySelector("#slot_7");
    const slot_8 = document.querySelector("#slot_8");
    const slot_9 = document.querySelector("#slot_9");
    const slot_10 = document.querySelector("#slot_10");

    // 각 슬롯에 이미지 삽입
    if (slot_1.hasChildNodes() === false) {
        slot_1.appendChild(card);
    } else if (slot_2.hasChildNodes() === false) {
        slot_2.appendChild(card);
    } else if (slot_3.hasChildNodes() === false) {
        slot_3.appendChild(card);
    } else if (slot_4.hasChildNodes() === false) {
        slot_4.appendChild(card);
    } else if (slot_5.hasChildNodes() === false) {
        slot_5.appendChild(card);
    } else if (slot_6.hasChildNodes() === false) {
        slot_6.appendChild(card);
    } else if (slot_7.hasChildNodes() === false) {
        slot_7.appendChild(card);
    } else if (slot_8.hasChildNodes() === false) {
        slot_8.appendChild(card);
    } else if (slot_9.hasChildNodes() === false) {
        slot_9.appendChild(card);
    } else if (slot_10.hasChildNodes() === false) {
        slot_10.appendChild(card);
    } else {
        console.log("Full Cards")
    }
}

// Spread 내 카드 전체 삭제
const removeSpread = () => {
    const cards = document.querySelectorAll('.card');
    if (cards.length !== 0) {
        cards.forEach(card => card.remove());
    }
}