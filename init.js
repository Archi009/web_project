//init.js
//상품, 회ㅎ원 벼눗 초기값지정.
/*
 *상품 코드
 상품명
 상품 가격
 평점
 이미지
 할인율
 ----회원 
 회언 아이디
 비밀번호
 권한 
 */

 const productData=[
  {prodCode: 'P001',
    productNamd: '사과',
    price: 2000,
    likeIt:4,
    image: '/food/images/Red_Apple.jpg',
    sale:15
  },
  {prodCode: 'P002',
    productNamd: '수박',
    price: 10000,
    likeIt:5,
    image: '/food/images/wmellon.jpg',
    sale:15
  },
  {prodCode: 'P003',
    productNamd: '복숭아',
    price: 2400,
    likeIt:4,
    image: '/food/images/peach.jpg',
    sale:15
  },
  {prodCode: 'P004',
    productNamd: '포도',
    price: 5000,
    likeIt:4,
    image: '/food/images/grapes.jpg',
    sale:0
  }]
const memberData = [
  {id: 'user01',pw:'1111',name :'홍길동',responsebility:'User'},
  {id: 'user02',pw:'2222',name :'홍길동',responsebility:'User'},
  {id: 'user03',pw:'3333',name :'홍길동',responsebility:'User'}
]
const cartData = [

  {id:'user1',product:'P001',qty:3},
  {id:'user2',product:'P002',qty:3},
  {id:'user3',product:'P003',qty:3},
  {id:'user4',product:'P004',qty:3}
]