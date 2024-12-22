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

// Two Choice Spread
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


// Spread 내 카드 전체 삭제
const removeSpread = () => {
    const cards = document.querySelectorAll('.card');
    if (cards.length !== 0) {
        cards.forEach(card => card.remove());
    }
}