/*

function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    // .then(data => console.log(data))
    .then(data => displayPosts(data))
};

function displayPosts(posts){
    console.log(posts);
    const postContainer = document.getElementById('post-container')
    for(const post of posts){
        console.log(post);
        const div = document.createElement('div');
        div.classList.add('post-body')
        div.innerHTML = `
            <h3>User: ${post.userId}</h3>
            <h4>Title: ${post.title}</h4>
            <p>Post: ${post.body}</p>
        `;
        postContainer.appendChild(div);
        
    }
}

loadPost();


*/

function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPost(data))
}

function displayPost(posts){
    const postContainer = document.getElementById('post-container');
    console.log(posts);
    for(const post of posts){
        const div = document.createElement('div');
        div.classList.add('post-body');
        div.innerHTML = `
            <h3>User- ${post.userId}</h3>
            <h4>Title: ${post.title}</h4>
            <p>Post details: ${post.body}</p>
        `;

        postContainer.appendChild(div);
    }
}




loadPosts();


function deletePost(){
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
});
}



function PatchAPost(){
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