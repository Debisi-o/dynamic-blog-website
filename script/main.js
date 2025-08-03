import { getPosts } from '../utils/storage.js';

const postList = document.getElementById('post-list');
const posts = getPosts();

if (posts.length === 0) {
    postList.innerHTML = "<p>No posts yet.</p>";
} else {
    postList.innerHTML = posts.map(post => `
    <div class="post-card">
      <h2>${post.title}</h2>
      <p>${post.content.substring(0, 100)}...</p>
      <a href="post.html?id=${post.id}">Read more</a>
    </div>
  `).join('');
}
