/*
function loadUsers2 (){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUserName(data))
}


function displayUserName(users){
    const listUser = document.getElementById('list');
    for(user of users){
        const li = document.createElement('li');
        li.innerText = user.name;
        // console.log(user.name);
        listUser.appendChild(li);
    }
}


*/


function loadUsers2 (){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayName(data))
}

function displayName(data){
    const uList = document.getElementById('list');
    for(user of data){
        const li = document.createElement('li');
        li.innerText = user.name;
        uList.appendChild(li);
    }


}


function deleteAPost(){
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
});
}



function patchAPost(){
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PATCH',
  body: JSON.stringify({
    title: 'foo',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
}



function createAPost(){
    fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
}