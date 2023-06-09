import sendRequest from './send-request.js';
const BASE_URL = '/api/posts';

export function getAllPosts() {
    return sendRequest(`${BASE_URL}/posts`)
}
export async function createPost(post) {
    return sendRequest(`${BASE_URL}/create`, 'POST', post);
}

export async function deletePost(postId){
    return sendRequest(`${BASE_URL}/posts`, 'DELETE', postId)
}



