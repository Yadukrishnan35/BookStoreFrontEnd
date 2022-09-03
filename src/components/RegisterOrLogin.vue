<template>
    <v-app>
        <v-main>
            <div class="display-card">
                <v-flex>
                    <v-row>
                        <v-card class="mx-auto  shopping-card">
                            <v-row class="book-image1">
                                <v-img class=" rounded-circle" :src="require('../assets/trollyy.png')">
                                </v-img>
                                <br />
                                <v-card-title class="text"> ONLINE BOOK SHOPPING </v-card-title>
                            </v-row>
                        </v-card>
                      
                        <v-card class="main-card1 mx-auto mt-9 pl-5 pr-5" >
                            <v-tabs centered>
                                <v-tab >
                                    <div style="color:black;font: bold 25px monospace;">    
                                    Login
                                </div>
                                </v-tab>
                                <v-tab-item>
                                   <div style="padding-left:30px;margin-top:30px;">
                                    <Login />
                                    </div>
                                </v-tab-item>
                            
                                <v-tab>
                                    <div style="color:black;font: bold 25px monospace;">    
                                    Signup
                                </div>
                                </v-tab>
                                <v-tab-item>
                                    <div style="padding-left:2px;margin-top:30px;">
                                    <SignUp />
                                    </div>
                                </v-tab-item>
                                </v-tabs>
                        </v-card>
                    </v-row>
                </v-flex>
            </div>
        </v-main>
    </v-app>
</template>

<script>
import SignUp from '@/components/Register.vue'
import Login from '@/components/Login.vue'
export default {
    name: "RegistrationOrLogin",
    components: {
        SignUp,
        Login,
    },
};
</script>

<style>

.v-card__title {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.0125em;
    line-height: 1rem;
    margin-left: -7px;
}
.display-card {
    
    height: 102%;
    margin-top: -70px;
    background-color: #C5C5C5;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
}
.main-card1 {
    top: 40px;
    right: 260px;
    width: 389px;
    height: 600px;
}
.shopping-card {
    top: 167px;
    left: 170px;
    width: 500px;
    height: 415px;
    
}
.book-image1 {
    height: 220px;
    width: 300px;
    margin-top: 30px;
    margin-left: 40px;
    justify-self: center;
}
.text{
    font-size: 14px;
    padding-left: 80px;
}
.login {
    padding-left: 30px;
    margin-top: 30px;
}

</style>