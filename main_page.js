
const ITEM_LIST = [
    {item_no:1, src: '', state:'LIMITED EDITION', title:' 스터드 프린지 와이드 벨트', price: 129900, desc: ''}, 
    {item_no:2, src: '', state:'LIMITED EDITION', title:'프린트 원피스' , price: 279900, desc: ''}, 
    {item_no:3, src: '', state:'LIMITED EDITION', title:'포플린 자수 원피스' , price: 189900, desc: ''}, 
    {item_no:4, src: '', state:'LIMITED EDITION', title:'절개 롱 원피스' , price: 189900, desc: ''}, 
    {item_no:5, src: '', state:'LIMITED EDITION', title:'비즈 쇼트 원피스' , price: 189900, desc: ''}, 
    {item_no:6, src: '', state:'LIMITED EDITION', title:'롱 네크리스' , price: 55900, desc:''},
    {item_no:7, src: '', state:'LIMITED EDITION', title:'링 세트' , price: 49900, desc:''},
    {item_no:8, src: '', state:'LIMITED EDITION', title:'넥타이 네크리스' , price: 109900, desc:''},
    {item_no:9, src: '', state:'LIMITED EDITION', title:'스웨이드 프린지 가죽 케이스프' , price: 329900, desc:''},
    {item_no:10, src: '', state:'LIMITED EDITION', title:'프린트 원피스' , price: 189900, desc:''},
    {item_no:11, src: '', state:'LIMITED EDITION', title:'리미티드 에디션 프린트 미니 원피스' , price: 209900, desc:''},
    {item_no:12, src: '', state:'LIMITED EDITION', title:'리미티드 에디션 자수 트라이앵글 브라렛' , price: 109900, desc:''},
    {item_no:13, src: '', state:'LIMITED EDITION', title:'애니멀 프린트 코튼 맥시 백' , price: 49900, desc:''},
    {item_no:14, src: '', state:'LIMITED EDITION', title:'콤비 원피스' , price: 189900, desc:''},
    {item_no:15, src: '', state:'LIMITED EDITION', title:'롱 이어링' , price: 45900, desc:''},
    {item_no:16, src: '', state:'LIMITED EDITION', title:'스터드 가죽 와이드 벨트' , price: 109900, desc:''},
    {item_no:17, src: '', state:'LIMITED EDITION', title:'프릴 스커트' , price: 129900, desc:''},
    {item_no:18, src: '', state:'LIMITED EDITION', title:'롱 이어링' , price: 45900, desc:''},
    {item_no:19, src: '', state:'LIMITED EDITION', title:'숏 재킷' , price: 209900, desc:''},
    {item_no:20, src: '', state:'LIMITED EDITION', title:'체인 네크리스' , price: 55900, desc:''},
    {item_no:21, src: '', state:'LIMITED EDITION', title:'측면 디테일 팬츠' , price: 169900, desc:''},
    {item_no:22, src: '', state:'', title:'레이스 프릴 브라우스' , price: 59900, desc:''},
    {item_no:23, src: '', state:'', title:'비닐 힐 샌들' , price: 59900, desc:''},
    {item_no:24, src: '', state:'Z1975', title:'롱 데님 원피스' , price: 45900, desc:''},
    {item_no:25, src: '', state:'ZW COLLECTION', title:'벌룬 팬츠' , price: 189900, desc:''},
    {item_no:26, src: '', state:'ZW COLLECTION', title:'컬렉션 지퍼 미디 원피스' , price: 109900, desc:''},
    {item_no:27, src: '', state:'', title:'케이블 니트 자켓' , price: 79900, desc:''},
    {item_no:28, src: '', state:'LIMITED EDITION', title:'스웨이드 프린지 미니 시티백' , price: 299900, desc:''},
    {item_no:29, src: '', state:'', title:'자수 트라이앵글 브라렛' , price: 109900, desc:''},
    {item_no:30, src: '', state:'', title:'프릴 디테일 도티드 스위스 블라우스' , price: 57900, desc:''},
    {item_no:31, src: '', state:'LIMITED EDITION', title:'스터드 기모노' , price: 169900, desc:''},
    {item_no:32, src: '', state:'LIMITED EDITION', title:'프린트 미디 스커트' , price: 169900, desc:''},
    {item_no:33, src: '', state:'LIMITED EDITION', title:'미니 큐브 백' , price: 59900, desc:''},
    {item_no:34, src: '', state:'LIMITED EDITION', title:'스터드 스웨이드 미니 시티백' , price: 259900, desc:''},
    {item_no:35, src: '', state:'LIMITED EDITION', title:'페이크 레더 쇼트 트렌치 코트' , price: 109900, desc:''},
    {item_no:36, src: '', state:'', title:'스웨이드 플랫폼 웨지' , price: 109900, desc:''},
    {item_no:37, src: '', state:'LIMITED EDITION', title:'스티치 미니 원피스' , price: 79900, desc:''},
    {item_no:38, src: '', state:'ZW COLLECTION', title:'벌룬 봄버 자켓' , price: 149900, desc:''},
    {item_no:39, src: '', state:'LIMITED EDITION', title:'파인 코튼 탑' , price: 39900, desc:''},
    {item_no:40, src: '', state:'LIMITED EDITION', title:'100% 스웨이드 프린지 가죽' , price: 369900, desc:''},
    {item_no:41, src: '', state:'', title:'비즈 크로셰 발레리나 슈즈' , price: 59900, desc:''},
    {item_no:42, src: '', state:'', title:'하이힐 스터드 샌들' , price: 89900, desc:''},
    {item_no:43, src: '', state:'', title:'레이스 콤비 블라우스' , price: 59900, desc:''},
    {item_no:44, src: '', state:'', title:'스터드 레더 플랫 샌들' , price: 109900, desc:''},
    {item_no:45, src: '', state:'LIMITED EDITION', title:'파인 코튼 탑' , price: 39900, desc:''},
    {item_no:46, src: '', state:'ZW COLLECTION', title:'스트라이프 언밸런스 스커트' , price: 129900, desc:''},
    {item_no:47, src: '', state:'LIMITED EDITION', title:'워싱 텍스트 티셔츠' , price: 19900, desc:''},
    {item_no:48, src: '', state:'LIMITED EDITION', title:'코튼 티셔츠' , price: 45900, desc:''},
    {item_no:49, src: '', state:'LIMITED EDITION', title:'스터드 가죽 와이드 벨트' , price: 109900, desc:''},
    {item_no:50, src: '', state:'', title:'롤업 멜빵 티셔츠' , price: 21900, desc:''}]








    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });