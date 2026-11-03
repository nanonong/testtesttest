////////////////////////////////////////////////////////////////////////////////////////////////////
// 상품 데이터 + 상품 목록 생성
// Vanilla JavaScript 버전
const ITEM_LIST = [
    // BEST
    [
        {item_no: 1, src: '1.jpg', title: '얼핏보면 전등같은 빗자루세트', o_price: 90000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.'},
        {item_no: 2, src: '2.jpg', title: '하얀 원통', o_price: 20000, s_price: 70000, desc: '상품에 대한 설명이 표시됩니다.'},
        {item_no: 3, src: '3.jpg', title: '원피스 같지만 알고보면 앞치마', o_price: 30000, s_price: 20000, desc: '상품에 대한 설명이 표시됩니다.'},
        {item_no: 4, src: '4.jpg', title: '검정 핸드백 같은 토트백', o_price: 40000, s_price: 40000, desc: '상품에 대한 설명이 표시됩니다.'},
        {item_no: 5, src: '5.jpg', title: '상의 같지만 뎅뎅이 하의', o_price: 50000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.'},
        {item_no: 6, src: '6.jpg', title: '더콤마-베스트', o_price: 70000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.'},
        {item_no: 7, src: '7.jpg', title: '더콤마-베스트', o_price: 70000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.'},
        {item_no: 8, src: '8.jpg', title: '더콤마-베스트', o_price: 70000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.'},

        {item_no: 9, src: '2.jpg', title: '더콤마-베스트', o_price: 70000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.'},
        {item_no: 10, src: '1.jpg', title: '더콤마-베스트', o_price: 70000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.'},
        {item_no: 11, src: '3.jpg', title: '더콤마-베스트', o_price: 70000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.'},
        {item_no: 12, src: '8.jpg', title: '더콤마-베스트', o_price: 70000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.'},
        {item_no: 13, src: '4.jpg', title: '더콤마-베스트', o_price: 70000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.'},
        {item_no: 14, src: '6.jpg', title: '더콤마-베스트', o_price: 70000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.'},
        {item_no: 15, src: '7.jpg', title: '더콤마-베스트', o_price: 70000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.'},
        {item_no: 16, src: '5.jpg', title: '더콤마-베스트', o_price: 70000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.'},

        {item_no: 17, src: '1.jpg', title: '더콤마-베스트', o_price: 70000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.'},
        {item_no: 18, src: '4.jpg', title: '더콤마-베스트', o_price: 70000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.'},
        {item_no: 19, src: '2.jpg', title: '더콤마-베스트', o_price: 70000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.'},
        {item_no: 20, src: '6.jpg', title: '더콤마-베스트', o_price: 70000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.'},
        {item_no: 21, src: '3.jpg', title: '더콤마-베스트', o_price: 70000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.'},
        {item_no: 22, src: '8.jpg', title: '더콤마-베스트', o_price: 70000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.'}
    ],
    // NEW
    [
        {item_no: 23, covered_src: '4.jpg', src: '1.jpg', title: '더콤마-NEW', o_price: 70000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.'},
        {item_no: 24, covered_src: '8.jpg', src: '2.jpg', title: '더콤마-NEW', o_price: 70000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.'},
        {item_no: 25, covered_src: '6.jpg', src: '3.jpg', title: '더콤마-NEW', o_price: 70000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.'},
        {item_no: 26, covered_src: '7.jpg', src: '4.jpg', title: '더콤마-NEW', o_price: 70000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.'},
        {item_no: 27, covered_src: '8.jpg', src: '5.jpg', title: '더콤마-NEW', o_price: 70000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.'},
        {item_no: 28, covered_src: '2.jpg', src: '6.jpg', title: '더콤마-NEW', o_price: 70000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.'},
        {item_no: 29, covered_src: '4.jpg', src: '7.jpg', title: '더콤마-NEW', o_price: 70000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.'},
        {item_no: 30, covered_src: '1.jpg', src: '8.jpg', title: '더콤마-NEW', o_price: 70000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.'},

        {item_no: 31, covered_src: '7.jpg', src: '4.jpg', title: '더콤마-NEW', o_price: 70000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.'},
        {item_no: 32, covered_src: '8.jpg', src: '5.jpg', title: '더콤마-NEW', o_price: 70000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.'},
        {item_no: 33, covered_src: '2.jpg', src: '6.jpg', title: '더콤마-NEW', o_price: 70000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.'},
        {item_no: 34, covered_src: '4.jpg', src: '7.jpg', title: '더콤마-NEW', o_price: 70000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.'},
        {item_no: 35, covered_src: '1.jpg', src: '8.jpg', title: '더콤마-NEW', o_price: 70000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.'}
    ],
    // OUTER
    [],

    // TOP
    [],

    // BOTTOM
    [],

    // ACC
    [],

    // BAG & SHOES
    []
];

// ==============================
// 카테고리 정보
// ==============================
const menu_array = ["best","new","outer","top","bottom","acc","bag_shoes"];
const title_array = ["BEST","NEW 5%","OUTER","TOP","BOTTOM","ACC","BAG & SHOES"];
const img_addr ="img/theComma/items/";

// ==============================
// URL에서 cate_no 가져오기
// ==============================
function get_cate_no() {
    const params = new URLSearchParams(location.search);
    const cateNo = params.get("cate_no");

    if (cateNo === null) {
        return null;
    }

    return Number(cateNo);
}

// ==============================
// URL에서 원하는 값 가져오기
// ==============================
function get_url_info(key) {
    const params = new URLSearchParams(location.search);
    return params.get(key);
}

// ==============================
// 상품 목록 생성
// ==============================
function load_items(cate_no, qty) {
    cate_no = +cate_no;

    // 매개변수 값이 잘못 들어온 경우 코드 진행하지 말고 중단
    if (!Number.isInteger(cate_no) || cate_no < 0 || cate_no >= ITEM_LIST.length) {
        return;
    }

    // 제대로 cate_no, qty 가 넘어온 경우 아래 코드 진행

    
// const menu_array = ["best","new","outer","top","bottom","acc","bag_shoes"];
// const title_array = ["BEST","NEW 5%","OUTER","TOP","BOTTOM","ACC","BAG & SHOES"];
    const category = menu_array[cate_no]; // 아래 for 문에서 li 만들때 class 이름 넣을 용도
    const items = ITEM_LIST[cate_no]; // 

    // 상품 목록 페이지에서는
    // 현재 카테고리에 맞게 sec의 id와 제목 변경
    const currentCateNo = get_cate_no(); // null
    
    if (currentCateNo !== null) {
        const mainSection = document.querySelector(".main > .sec");
        const sectionTitle = document.querySelector(".main .sec_title");

        if (mainSection) {  mainSection.id = category;  }
        if (sectionTitle) {  sectionTitle.textContent = title_array[cate_no];  }
    }

    const section = document.querySelector(`#${category}.sec`);
    if (!section) { return; }

    const container = section.querySelector(".item_container");
    if (!container) { return; }

    // 이미 출력된 실제 상품 개수
    // 원본 코드의 "#best.item_container" 선택자 오류를 수정
    // :scope 는 현재 querySelector() 를 실행하고 있는 요소 자체를 뜻함.(지금 코드에서는 container 잡음)
    const itemLength = container.querySelectorAll(":scope > li" ).length; 
                    //    container.querySelectorAll("li").length // 지손 li 까지 다 잡음
                    //    container.children.length // 그래서 바꾸려면 이거로 바꿔야함


    // 최대 DB에서 불러오는 전체 데이터의 개수만큼만 불러오게 하는 용도(아래 for 문에서 사용)
    const endIndex = Math.min(itemLength + qty, items.length );

    let list = "";

    // ul.item_container 에 li 들 넣어주는 부분
    for ( let i = itemLength; i < endIndex; i++) {
        const item = items[i];
        const detailUrl = `221-3.theComma(item).html?cate_no=${cate_no}&item_no=${item.item_no}`;

        list += `<li class="${category} item_init" >
                    <div class="item_img">
                        <a href="${detailUrl}">`;

        // NEW 상품은 hover용 이미지 하나를 더 사용
        if ( cate_no === 1 && item.covered_src ) {
            list += `<img src="${img_addr}${category}/${item.covered_src}" alt="${item.title}" class="coveredImg">`;
        }

        list += `<img src="${img_addr}${category}/${item.src}" alt="${item.title}">
                </a>
            </div>

            <div class="item_info">
                <div class="item_info_title">
                    ${item.title}
                </div>
                <div class="origin_price">
                    ${comma(item.o_price)}원
                </div>
                <div class="sale_price">
                    ${comma(item.s_price)}원
                </div>
                <div class="item_desc">
                    ${item.desc}
                </div>
            </div>
        </li>`;
    }
    container.innerHTML += list
    // container.insertAdjacentHTML("beforeend",list);
}


// ==============================
// 가격 콤마
// ==============================

function comma(num) {
    return (num).toLocaleString();
}


// ==============================
// item_no로 상품 찾기
// 상세페이지에서도 사용할 수 있도록 제공
// ==============================
function find_item_by_no(itemNo) {
    const targetNo = +(itemNo);

    for (let cateNo = 0; cateNo < ITEM_LIST.length; cateNo++) {
        const found = ITEM_LIST[cateNo].find(function(item) {
                        return (item.item_no === targetNo);
                    });

        if(found) { 
            return {
                cate_no: cateNo, 
                item: found
            };
        }
    }
    return null;
}