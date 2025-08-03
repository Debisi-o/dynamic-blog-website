import { getPosts, savePosts, getPostById } from '../utils/storage.js';

const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('id');
const post = getPostById(postId);

if (!post) {
    document.getElementById('postContainer').innerHTML = "Post not found!";
} else {
    document.getElementById('editTitle').value = post.title;
    document.getElementById('editContent').value = post.content;
}

document.getElementById('updateBtn').onclick = () => {
    const updatedTitle = document.getElementById('editTitle').value;
    const updatedContent = document.getElementById('editContent').value;

    const posts = getPosts();
    const index = posts.findIndex(p => p.id === postId);
    posts[index] = { ...posts[index], title: updatedTitle, content: updatedContent };
    savePosts(posts);
    alert("Post updated!");
};

document.getElementById('deleteBtn').onclick = () => {
    const posts = getPosts().filter(p => p.id !== postId);
    savePosts(posts);
    window.location.href = "index.html";
};
