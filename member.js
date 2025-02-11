//member.js
// localStorage에서 members 정보.localStorage에서

let members = [];
members = JSON.parse(localStorage.getItem('members'));
console.log(members);
let list = document.getElementById('list');

members.forEach(function(item){
  list.innerHTML += makeRow(item)
}
)

function makeRow(item={}){
  let html = null;
  html = '<tr>'
  for(let prop in item){
    html += '<td>'+item[prop]+'</td>'
  }
  html += '</tr>'
  return html;
}

//form.submit 이벤트.
document.forms.addMember.addEventListener('submit',function(e){
  e.preventDefault();
  let id = document.querySelector('input[name="user_id"]').value
  let pw = document.querySelector('input[name="user_pw"]').value
  let name = document.querySelector('input[name="user_nm"]').value
  let newItem= makeRow({id,pw,name})
  document.querySelector("#list").innerHTML += newItem;
  members.push({id,pw,name})
  localStorage.setItem('members',JSON.stringify(members))
})