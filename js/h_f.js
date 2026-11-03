// DOM 준비 되면 실행
// 221-1 파일에 맨 아래 index.js 파일을 연결할거지만 혹시 모르니 DOM 구조가 다 로드 되면 동작하라는 이벤트 걸어주기(없어도 됨. 강의니까 함)
document.addEventListener('DOMContentLoaded', function () {
/***********************************/
/*          탑배너                  */
/***********************************/
    let tb_item = document.getElementsByClassName('tb_item')
    let tb_count = tb_item.length;
    let tb_idxNo = 1; // 탑 배너용 현재 방 잡는거
    let tb_timer = 2000; // 2초마다 움직이게 하기


    if (tb_count > 0) {
        tb_item[0].style.top = "0px"

        setInterval(() => {
            let c_idx = tb_idxNo % tb_count;
            let o_idx = (tb_idxNo + tb_count - 1) % tb_count;
            let pos_y = 0;

            // 들어올 판(들어오기 전에 기본 위치 잡기)
            tb_item[c_idx].style.top = "100%"

            let interval = setInterval(function () {
                // 나갈거
                tb_item[o_idx].style.top = -pos_y + "%";

                // 들어올거
                tb_item[c_idx].style.top = (100 - pos_y) + "%"

                pos_y++;

                if (pos_y > 100) {
                    clearInterval(interval)
                }
            }, 5)

            tb_idxNo++
        }, tb_timer);
    }

/**************************************************/
// 스크롤바 내려오면 메뉴바 따라다니게 하기
/**************************************************/
    let top_banner = document.getElementsByClassName('top_banner')[0]
    let menu = document.getElementsByClassName('menu')[0];
    let wrap = document.getElementById('wrap');

    // let menu_o_top = menu.getBoundingClientRect().top + window.scrollY;
    let menu_height = menu.offsetHeight;

    // parseFloat: 문자형 40px 를 숫자(실수형) 40 으로 변환
    let wrap_paddingTop = parseFloat(getComputedStyle(wrap).paddingTop);
    let menu_o_top = menu.getBoundingClientRect().top + window.scrollY;
    let top_banner_height = top_banner.offsetHeight

    window.addEventListener('scroll', function () {
        let s_top = window.scrollY + top_banner_height;
        // console.log(window.scrollY, s_top, menu_o_top)

        // 스크롤이 내려왔다는 뜻
        if (menu_o_top <= s_top) {
            menu.classList.add('menu_active');
            wrap.style.paddingTop = menu_height + wrap_paddingTop + "px"
        }
        else {
            menu.classList.remove('menu_active')
            wrap.style.paddingTop = wrap_paddingTop + "px"
        }
    })


/**************************************************/
// 스크롤바 내려오면 메뉴바 따라다니게 하기
/**************************************************/
    // 메뉴 100% 판 관련
    // menu 는 아까 스크롤 이벤트에서 잡아서 따로 안잡음
    // let menu = document.getElementsByClassName('menu')[0];
    // let menu_item = document.getElementsByClassName('menu_item')
    let menu_item = document.querySelectorAll('.menu_item > a');
    let pan = document.getElementsByClassName('pan')[0];
    let pan_item = document.getElementsByClassName('pan_item');


    // 모든 menu_item에 mouseenter, mouseleave 이벤트 주기
    for (let i = 0; i < menu_item.length; i++) {
        menu_item[i].addEventListener('mouseenter', function () {
            pan.classList.add('pan_active')

            for (let j = 0; j < menu_item.length; j++) {
                pan_item[j].classList.remove('pan_item_active')
            }

            pan_item[i].classList.add('pan_item_active')

        })
        menu_item[i].addEventListener('mouseleave', function () {
            pan.classList.remove('pan_active')
        })
    }

    pan.addEventListener('mouseenter', function(){
            pan.classList.add('pan_active')
    })
    pan.addEventListener('mouseleave', function(){
            pan.classList.remove('pan_active')
    })
})