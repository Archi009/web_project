//index.js
let members = [
  {id: "user1",
    pw: "1111",
    name: "hongkildong"
  },
  {id: "user2",
    pw: "2222",
    name: "jungyouhwan"
  },
  {id: "user3",
    pw: "3333",
    name: "kimeoahjin"
  }
]


//회원정보
let member_json = JSON.stringify(members);
localStorage.setItem("members",member_json)










//연습

localStorage.setItem("name","Is this right?")
console.log(localStorage.getItem("name"));

// JSON 문자열
let json = `{"name": "Hongkildon","age":20}`
// 문자열 -> 객체
let obj = JSON.parse(json)
console.log(obj);
localStorage.setItem('friends',JSON.stringify(obj));
console.log(JSON.parse(localStorage.getItem('friends')));

//JSON.parse() => json형태의 문자열을 다시 객체 또는 정보로 바꿔줌
//JSON.strigify() => 객체 또는 정보를 json 문자열로 바꿔줌


//객체 -> 문자열
obj = {
  name : "민수",
  friends :[{
    name : '김민수'
    ,phone: '010-1111'
  },{
    name : '박현수'
    ,phone: '010-1121'
  }
]
}

json = JSON.stringify(obj)
console.log(json);