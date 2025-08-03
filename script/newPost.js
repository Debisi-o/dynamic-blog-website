import { getPosts, savePosts, generateId } from '../utils/storage.js';

document.getElementById('postForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value.trim();
    const content = document.getElementById('content').value.trim();

    if (!title || !content) return alert('All fields required.');

    const newPost = {
        id: generateId(),
        title,
        content
    };

    const posts = getPosts();
    posts.unshift(newPost);
    savePosts(posts);

    window.location.href = "index.html";
});
