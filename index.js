
const handleCard = (cardName) => {
    console.log(cardName);

    // 이미지 요소 생성
    const img = document.createElement('img');
    img.src = `./assets/cards/${cardName}.jpg`; // 파일 이름은 cardName 값과 연관
    img.alt = cardName; // 접근성을 위한 alt 속성 추가
    img.classList.add('card-image'); // 스타일을 위해 클래스 추가 가능

    // 첫 번째 card 요소를 찾고 이미지 삽입
    const slot = document.querySelector('.slot');
    const card =  document.createElement("button");
    card.classList.add('card');

    // 카드 클릭 시 자기 자신을 제거
    card.addEventListener('click', () => card.remove());

    if (slot && card) {
        card.appendChild(img);  // 이미지 삽입
        slot.appendChild(card); // 카드를 슬롯에 삽입
    }
}

const removeAll = () => {
    console.log("REMOVE ALL!!!");
}