<template>
<div style="padding-right: 900px;margin-top: 50px;">
    <div style="display: flex;flex-direction: row;"></div>
   
    <h1>Books</h1>
({{ booksArray.length }} items)
<DisplayBooks v-bind:bookListArray="booksArray"></DisplayBooks>
</div>
</template>


<script>
import BookService from '@/Services/UserService/BookService';
import DisplayBooks from './DisplayBooks.vue';

export default {
    name: "GetAllBooks",
    data() {
        return {
            booksArray: [],
        };
    },
    methods: {
        getAllBooks() {
            console.log("get all books Called");
            BookService.prototype.getAllBookService()
                .then((data) => {
                console.log("Response from getAllBooks", data);
                this.booksArray = data.data.books;
                console.log(this.booksArray);
                //   this.NotesArray.reverse()
            })
                .catch((error) => {
                console.log(error);
            });
        },
    },
    mounted() {
        this.getAllBooks();
    },
    components: { DisplayBooks }
};
</script>