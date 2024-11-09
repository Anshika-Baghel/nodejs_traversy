const posts=[
    {id:1,title:'Post One'},
    {id:2,title:'Post Two'},
];
//export const getPosts=()=>posts;
// another way of exporting
const getPosts=()=>posts;
export const getPostsLength=()=>posts.length;
export default getPosts;