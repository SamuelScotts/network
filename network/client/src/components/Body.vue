<template>
    <v-main>
        <v-container color="#FFFFFF">
            <v-row>
                <!-- COLUMN ONE -->  
                <v-col cols="12" sm="3">
                    <v-card flat outlined>
                        <v-list nav>
                            <v-list-item-group>

                            <v-list-item>
                                <v-list-item-icon>
                                <v-icon color="#B33951" large>mdi-abugida-thai</v-icon><h2>etwork</h2>
                                </v-list-item-icon>
                            </v-list-item>

                            <v-divider></v-divider>

                            <v-list-item>
                                <v-list-item-icon>
                                <v-icon class="" large>mdi-home</v-icon>
                                </v-list-item-icon>
                                <v-list-item-title class="">Home</v-list-item-title>
                            </v-list-item>

                            <v-list-item>
                                <v-list-item-icon>
                                <v-icon class="mt-n6" large>mdi-bell</v-icon>
                                </v-list-item-icon>
                                <v-list-item-title class="mt-n6">Notifications</v-list-item-title>
                            </v-list-item>

                            <v-list-item>
                                <v-list-item-icon>
                                <v-icon class="mt-n6" large>mdi-email</v-icon>
                                </v-list-item-icon>
                                <v-list-item-title class="mt-n6">Messages</v-list-item-title>
                            </v-list-item>

                             <v-list-item>
                                <v-list-item-icon>
                                <v-icon class="mt-n6" large>mdi-account</v-icon>
                                </v-list-item-icon>
                                <v-list-item-title class="mt-n6">Profile</v-list-item-title>
                            </v-list-item>

                            </v-list-item-group>
                        </v-list>
                    </v-card>

                    <!-- ********************* -->
                    <!-- SEARCH SECTION --> 
                    <v-card class="pt-6 pr-3 pl-3 mt-4" outlined>
                        <v-text-field prepend-inner-icon="mdi-magnify" placeholder="Search Network" filled rounded dense></v-text-field>
                    </v-card>

                </v-col>

                <!-- ********************* -->
                <!-- COLUMN TWO -->  
                <v-col cols="12" sm="6">

                        <!-- ********************* -->
                        <!-- POST SUBMISSION SECTION --> 
                        <v-card class="pa-2" outlined>
                            <v-form ref="form">
                            <v-text-field class="pa-2 mb-n8" v-model="post.content" :rules="inputRules" placeholder="What's on your mind?" rounded></v-text-field>
                            </v-form>
                            <v-card-actions>
                            <v-icon class="ml-4" color="#DC6ACF" large>mdi-image</v-icon>
                            <v-icon class="ml-4 mr-4" color="#C75000" large>mdi-gif</v-icon>
                            <v-icon color="#DD0000" large>mdi-emoticon</v-icon>
                            <v-spacer></v-spacer>
                            <v-btn rounded class="pa-4" color="#B33951" dark @click="submitPost()">Post</v-btn>
                        </v-card-actions>
                        </v-card>

                        <!-- ********************* -->
                        <!-- POST VIEW --> 
                        <v-card class="mt-4" outlined>
                            
                            <v-card class="pa-2" flat>
                                <div v-for="(post,index) in posts" :key="index">
                                    <v-card flat>

                                        <!-- ********************* -->
                                        <!-- Poster Details -->
                                        <v-card-title>
                                            <v-icon class = "mr-2" x-large>mdi-account-circle-outline</v-icon>
                                            {{post.name}}
                                        </v-card-title>

                                        <!-- ********************* -->
                                        <!-- Post Content -->
                                        <v-card-title class="mt-n5">{{post.content}}</v-card-title>

                                        <!-- ********************* -->
                                        <!-- Post Actions -->
                                        <v-card-actions class="mt-n1 ml-4">
                                            <span>
                                                <v-dialog v-model="post.dialog" max-width="36rem">
                                                <template v-slot:activator="{ on, attrs }">
                                                    <span class="mr-10" v-bind="attrs" v-on="on" v-if="post.replies.length > 0"><v-icon class="ml-2 mr-2" color="#DC6ACF">mdi-message-outline</v-icon>{{post.replies.length}}</span>
                                                    <span class="mr-12" v-bind="attrs" v-on="on" v-else><v-icon class="ml-2 mr-2" color="#DC6ACF">mdi-message-outline</v-icon></span>
                                                </template>
                                                
                                                <!-- ********************* -->
                                                <!-- Reply/Comment -->
                                                <v-card>
                                                    <v-card-title>
                                                        <v-icon class = "mr-2" x-large>mdi-account-circle-outline</v-icon>
                                                        {{post.name}}
                                                    </v-card-title>

                                                    <!-- ********************* -->
                                                    <!-- Reply/Comment - Post Content -->
                                                    <v-card-title class="mt-n4">{{post.content}}</v-card-title>

                                                        <v-divider></v-divider>

                                                        <v-text-field class="pa-2 mb-n8 mt-2" v-model="comment.content" placeholder="Got something to say?" rounded></v-text-field> 
   
                                                    <!-- ********************* -->
                                                    <!-- Reply/Comment - Actions -->
                                                    <v-card-actions>
                                                        <v-icon class="ml-4" color="#DC6ACF">mdi-image</v-icon>
                                                        <v-icon class="ml-4 mr-4" color="#C75000">mdi-gif</v-icon>
                                                        <v-icon color="#DD0000">mdi-emoticon</v-icon>

                                                        <v-spacer></v-spacer>

                                                        <v-btn color="#B33951" small dark rounded @click="dialog = false, submitComment(index)">
                                                            Reply
                                                        </v-btn>
                                                    </v-card-actions>

                                                    <v-divider></v-divider>

                                                    <!-- ********************* -->
                                                    <!-- Reply/Comment - Replies -->
                                                    <div v-for="(reply, index) in post.replies" :key="index">
                                                    <v-card-title class=""><v-icon class = "mr-2" x-large>mdi-account-circle-outline</v-icon>{{reply.name}}</v-card-title>
                                                    <v-card-title class="ml-2 mt-n6">{{reply.content}}</v-card-title>
                                                    <v-divider></v-divider>
                                                    </div>
                                                </v-card>

                                                </v-dialog>
                                                <span class="mr-12"><v-icon class="ml-2 mr-2" color="#C75000">mdi-reply-all-outline</v-icon>{{post.shares}}</span>
                                                <span><v-icon class="ml-2 mr-2" color="#DD0000">mdi-heart-outline</v-icon>{{post.hearts}}</span>
                                            </span>
                                        </v-card-actions>
                                    
                                    </v-card>
                                </div>
                            </v-card>   

                        </v-card>

                </v-col>

                <!-- ********************* -->
                <!-- COLUMN THREE -->  
                <v-col cols="12" sm="3">

                    <!-- ********************* -->
                    <!-- NEWS STORIES SECTION --> 
                    <v-card class="pr-3 pl-3" outlined>
                        <v-card-title>Today's News:</v-card-title>

                            <v-divider></v-divider>

                        <v-card-subtitle class="mb-n8">Politics</v-card-subtitle>
                        <v-card-title>Brexit: Deadline looms</v-card-title>
                        <v-card-subtitle class="mb-n2">326 views</v-card-subtitle>

                            <v-divider></v-divider>

                        <v-card-subtitle class="mb-n8">Health - UK</v-card-subtitle>
                        <v-card-title>Covid-19: New strain</v-card-title>
                        <v-card-subtitle class="mb-n2">291 views</v-card-subtitle>

                            <v-divider></v-divider>

                        <v-card-subtitle class="mb-n8">Technology</v-card-subtitle>
                        <v-card-title>Cyber Punk released</v-card-title>
                        <v-card-subtitle class="mb-n2">163 views</v-card-subtitle>
                    </v-card>
                    
                    <!-- ********************* -->
                    <!-- PEOPLE TO FOLLOW --> 
                    <v-card class="mt-4 pt-2 pr-3 pl-3" outlined>
                            <v-card-title>You may know?</v-card-title>
                            <div v-for="(user, index) in users" :key="index">
                            <v-divider></v-divider>
                                <v-card-title>
                                    <v-icon class = "mr-2">mdi-account-circle-outline</v-icon>
                                    {{user.name}}
                                    <v-spacer></v-spacer>
                                    <v-btn rounded class="mt-4" color="#B33951" dark x-small outlined>Network</v-btn>
                                </v-card-title>
                            </div>
                    </v-card>

                </v-col>

            </v-row>
        </v-container>
    </v-main>
</template>

<script>

  import axios from 'axios'

  export default {
    name: 'Body',

    data(){
        return {
        comment:{
          name: "Lucy Turner",
          content: "",
        },
        post:{
            name: "Lucy Turner",
            content: "",
        },
        posts: [],
        users:[ {
                    name: "Peter Jones",
                    username: "PJones89",
                },
                {
                    name: "Anna Chapple",
                    username: "AnnaCee",
                },
                {
                    name: "Billy Matthews",
                    username: "BillMatt425",
                },
              ],
        inputRules: [
        v => (v && v.length > 0),
      ],
        };
    },

    created() {
        this.getData();
    },

    methods: {

        async getData() {
            try {
                let response = await axios.get('http://localhost:3000/');
                this.posts = response.data;   
            } catch (error) {
                console.error(error);
            }
        },

        async submitPost(){
            try {
                await axios.post('http://localhost:3000/', this.post)
                let response = await axios.get('http://localhost:3000/');
                this.posts = response.data;
                this.post.content = "";
            } catch (error) {
                console.error(error);
            }
        },

        async submitComment(index){
            try {
                await axios.post('http://localhost:3000/' + index, this.comment)
                let response = await axios.get('http://localhost:3000/');
                this.posts = response.data;
            } catch (error) {
                console.error(error);
            }
        }
    },

  }

</script>

<style>
.v-text-field{
border-radius:28px!important;
} 
.v-card{
border-radius:10px!important;
}
</style>