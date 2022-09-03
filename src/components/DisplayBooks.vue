<template>
    <div
      class="CreateNew"
      style="
        display: flex;
        flex-direction: row;
        justify-content: start;
        flex-wrap: wrap;
      "
    >
    
    <div
        style="width: 230px; height: 250px; margin: 5px; border: 1px solid"
        v-for="book in bookListArray" 
        :key="book.id"
        >
        <div style="padding-top: 100px;"   >
        {{book.name}}<br>
           {{book.description}}<br>
           {{book.author}}<br>
           {{book.image}}<br>
           {{book.price}}<br>
            {{book.quantity}}
           </div>
        
  
          <!-- <div >
  
            <div @click="setNotedata(note)" @click.stop="showScheduleForm = true">
              <span>{{ note.title }}</span>
  
              <div @click="setNotedata(note)">
                <span>{{ note.description }}</span>
              </div>
            </div>
          </div>
           -->
        </div>
          
      </div>
    
  
  </template>
  <script>
  
  
  export default {
    name: "DisplayBooks",
        props: ["bookListArray"],
  
    data() {
      return {
        // id:"",
        showScheduleForm: false,
        // noteInfo: "",
      };
    },
    // methods: {
    //   setNotedata(noteObject) {
    //     console.log(noteObject);
    //     this.noteInfo = noteObject;
    //     // this.NotesArray = noteObject.noteObject.notes;
    //     //     console.log(this.NotesArray);
    
    //   },
    // },
  };
  </script>
  <style scoped>
  .ft {
    flex-direction: row;
    margin-top: 50px;
  }
  .CreateNew {
    width: 1000px;
    margin-left: 250px;
    margin-top: 50px;
  }
  .icone {
    display: flex;
    flex-direction: row;
    justify-content: start;
    margin-right: 5px;
  }
  </style>
  