
// href='#' 클릭: 최상단 이동 방지
$(document).ready(function () {
    $("a[href='#']").on("click", function (e) {
        e.preventDefault(); // 기본 동작(최상단 이동) 방지
    });
});


// gnb / 스크롤 내릴 때 안보이고, 올릴 때 보이게 구현 
$(document).ready(function () {
    let lastScrollTop = 0; // 이전 스크롤 위치 저장
    const $header = $("header"); // 헤더 선택
    const headerHeight = $header.outerHeight(); // 헤더의 높이 계산

    $(window).on("scroll", function () {
        const currentScrollTop = $(this).scrollTop(); // 현재 스크롤 위치 가져오기

        if (currentScrollTop > lastScrollTop) {
            // 스크롤 내릴 때
            $header.css("transform", `translateY(-${headerHeight + 16}px)`); // 헤더 숨기기
        } else {
            // 스크롤 올릴 때
            $header.css("transform", "translateY(0)"); // 헤더 보이기
        }

        lastScrollTop = currentScrollTop; // 현재 스크롤 위치를 업데이트
    });
});

// gnb .plus-btn / 클릭 이벤트를 통해 active 클래스를 토글하여 세로선을 숨김
$(document).ready(function () {
    $(".plus-btn a").on("click", function (e) {
        e.preventDefault(); // 기본 동작 방지
        $(this).toggleClass("active"); // .plus-btn a에 active 클래스 토글
        $(".project-menu").toggleClass("active"); // .project-menu에 active 클래스 토글
    });
});
