//////////////////////////////////////
// 메인 배너 세팅
//////////////////////////////////////
let box = document.getElementsByClassName('box');
let box_count = box.length;

// 현재 보고 있는 방 idx 번호
let idx = 0;

// 버튼 연타 방지
let btn_chk = true;

// 0번 배너 left: 0 지점에 오게 하기 (css 로 해도 됨)
box[0].style.left = 0;


//////////////////////////////////////
// 인디케이터 세팅
//////////////////////////////////////
let indicator = document.getElementsByClassName('indicator')[0]

for(let i=0; i<box_count; i++) {
    indicator.innerHTML += `<div class="indi ${i==0?'indi_active':''}"></div>`
}
// let indi = document.getElementsByClassName('indi')[0].classList.add('indi_active')


//////////////////////////////////////
// 이미지 슬라이드 관련 함수 (메인배너, 인디케이터 관련 이벤트)
//////////////////////////////////////
// out_pos - 현재 배너 나갈 방향 (-1: 왼쪽, 1: 오른쪽)
// target_idx - 들어올 판 idx 번호
// in_pos - 들어올 배너 방향 (-1: 왼쪽, 1: 오른쪽)

let indi = document.getElementsByClassName('indi'); // slide 함수에서 사용
function slide(out_pos, target_idx, in_pos) {
    if(!btn_chk) return;

    btn_chk = false;

    // 인디케이터 변경
    indi[idx].classList.remove('indi_active'); // 뺄거
    indi[target_idx].classList.add('indi_active'); // 추가할거
    
    // 이미지 슬라이드 
    let pos_x = 0;

    let mb_interval = setInterval(function(){
        // 현재 보고있는 배너 내보내기
        box[idx].style.left = `${out_pos * pos_x}%`

        // 새 배너 들어오기
        box[target_idx].style.left = `${in_pos * (100 - pos_x)}%`

        pos_x++;
        // 배너가 도착하면 인터벌 멈추고 idx 방 갱신
        if(pos_x > 100) {
            clearInterval(mb_interval);
            idx = target_idx;
            btn_chk = true;
        }

    }, 10)

}

// 좌우 버튼 클릭
let btn_R = document.getElementById('btn_R');
let btn_L = document.getElementById('btn_L');

btn_R.addEventListener('click', function(){
    let next_idx = (idx + 1) % box_count;
    slide(-1 , next_idx, 1);
})
btn_L.addEventListener('click', function(){
    let prev_idx = (idx + box_count - 1) % box_count;
    slide(1 , prev_idx, -1);
})

// 인디케이터 클릭
for(let i=0; i<box_count; i++) {
    indi[i].addEventListener('click', function(){
        // 현재 보고 있는 것보다 뒤쪽 꺼 클릭 했을때(우측 -> 좌측 이동)
        if(idx < i) slide(-1 , i, 1);

        // 현재 보고 있는 것보다 앞쪽 꺼 클릭 했을때(좌측 -> 우측 이동)
        else if( idx > i) slide(1 , i, -1);

    })
}

// 자동 슬라이드
let auto_interval = "";
function auto_slide() {
    clearInterval(auto_interval)
    auto_interval = setInterval(()=> {
        // let next_idx = (idx + 1) % box_count;
        // slide(-1 , next_idx, 1);

        btn_R.click(); // btn_R 을 JS에서 직접 클릭 한것처럼 동작시킴
    }, 3000)
}
auto_slide()

// 메인배너에 마우스 올리면 자동 슬라이드 정지, 빼면 자동 슬라이드 동작
let main_banner = document.getElementsByClassName('main_banner')[0];
main_banner.addEventListener('mouseenter', function(){
    clearInterval(auto_interval)
})
main_banner.addEventListener('mouseleave', function(){
    auto_slide()
})
 


/**************************************************/
// 스크롤바 내려오면 해당 섹션(#best, #new)의 아이템들(li) 순차적으로 올라오게 하기
/**************************************************/

// 해당 섹션의 o_top 값 구하는거
function get_sec_top(el) {
    console.log(el.getBoundingClientRect().top + window.scrollY)
    return el.getBoundingClientRect().top + window.scrollY;
}

// 해당 섹션의 li 들에게 item_init_active 주는거
function item_slide_up(el) {
    for(let i=0; i<el.length; i++) {
        setTimeout(function(){
            el[i].classList.add('item_init_active');
        }, i * 80);
    }
}

// let win_height = window.innerHeight;
let sec_w_ranking = document.getElementById('w_ranking');
let sec_best = document.getElementById('best');
let sec_new = document.getElementById('new');
window.addEventListener('scroll', function(){
    // let s_bot = window.scrollY + win_height;
    let s_bot = window.scrollY + window.innerHeight;

    if(sec_w_ranking &&  get_sec_top(sec_w_ranking) <= s_bot - 200) {
        item_slide_up(sec_w_ranking.getElementsByClassName('item_init'))
    }
    if(sec_best &&  get_sec_top(sec_best) <= s_bot - 200) {
        item_slide_up(sec_best.getElementsByClassName('item_init'))
    }
    if(sec_new &&  get_sec_top(sec_new) <= s_bot - 200) {
        item_slide_up(sec_new.getElementsByClassName('item_init'))
    }
})



//////////////////////////////////////////////////////
// index 페이지에서 best , new15%  섹션에 각각 아이템 8개씩 불러오는 부분
load_items(0, 8)
load_items(1, 8)