document.addEventListener('DOMContentLoaded', function(){

    // url 통해서 넘어온 정보들 중에 cateNo 몇인지 찾기
    let cateNo = get_url_info('cateNo')
    // console.log("cateNo: " , cateNo);
    console.log("items: " , ITEM_LIST[cateNo]);


    // 8개씩 해당 카테고리 에서 아이템 뽑아옴
    load_items(cateNo, 8);


    // 무한스크롤 - DB 개수에 따라 limit 있음
    let sec = document.getElementsByClassName('sec')[0];
    window.addEventListener('scroll', function(){
        let sec_top = sec.getBoundingClientRect().top + window.scrollY;
        let sec_height = sec.offsetHeight;
        let sec_bottom = sec_top + sec_height;

        let screen_bot = window.scrollY + window.innerHeight;
 

        // console.log(sec_bottom - 300 , screen_bot)
        if(sec_bottom - 100 <= screen_bot) {
            load_items(cateNo, 8)
        }

    });
})