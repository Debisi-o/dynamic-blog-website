

export function getPosts() {
    return JSON.parse(localStorage.getItem('blogPosts')) || [];
}

export function savePosts(posts) {
    localStorage.setItem('blogPosts', JSON.stringify(posts));
}

export function getPostById(id) {
    const posts = getPosts();
    return posts.find(p => p.id === id);
}

export function generateId() {
    return Date.now().toString();
}
