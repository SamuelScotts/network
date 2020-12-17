import axios from 'axios';

export default {
    async getData() {
        let res = await axios.get("http://localhost:3000");
        return res.data;
    },

    async postComment(postId, comment){
        await axios.post("http://localhost:3000/", postId, comment);
    },

    async submitPost(post){
        await axios.post("http://localhost:3000/", post);
    },
}
