import axios from 'axios';

const urlposts = 'http://localhost:5000/posts';

export const fetchPosts = () => axios.get(urlposts+'/getallPosts');
export const createPost = (newPost) => axios.post(urlposts+'/createPost', newPost);
export const updatePost = (id, updatedPost) => axios.patch(`${urlposts+'/updatePost'}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${urlposts+'/deletePost'}/${id}`);
export const likePost = (id) => axios.patch(`${urlposts+'/likePost'}/${id}`);


