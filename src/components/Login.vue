<template>
  
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-col>
      <div class="email">
        <v-text-field
          outlined
          dense
          autocomplete="off"
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
        >
        </v-text-field>
      </div>
      <div class="password">
        <v-text-field
          outlined
          dense
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="() => (showPassword = !showPassword)"
          :type="showPassword ? 'text' : 'password'"
          v-model="Password"
          :rules="passwordRules"
          label="Password"
          required
        >
        </v-text-field>
      </div>

      <div class="Forget_password">
        <router-link to="/forget">Forget Password</router-link>
      </div>

      <div>
        <v-btn
          :disabled="!valid"
          color="#a03037"
          class="btn"
          @click="validate"
        >
        <div style="margin-left: -20px;color: white;">

        Login
        </div>
        </v-btn>
      </div>
      <div style="padding-top: 20px; margin-left: -50px">
        <b>OR</b>
        </div>
        <div >
          <div class="fb_gle_btn">
          <v-btn
            href="https://www.facebook.com/"
            :disabled="!valid"
            color="#4266B2"
            
          >
            FaceBook
          </v-btn>

          <v-btn
            href="https://accounts.google.com/"
            :disabled="!valid"
            @click="validate"
          >
            Google
          </v-btn>
          </div>
        </div>
      
    </v-col>
  </v-form>
</template>
  
<script>
import UserService from '@/Services/UserService/UserService';

export default {
  name: "LoginComponent",
  data: () => ({
    valid: true,

    Password: "",

    passwordRules: [
      (v) => !!v || "password is required",
      (v) =>
        (v && v.length <= 10) || "password must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    showPassword: false,
    showCPassword: false,
    sending: false,
  }),
  methods: {
    validate() {
      console.log(this.email);
      console.log(this.Password);
      let reqData = {
        email:this.email,
        password:this.Password,
      }
      UserService.prototype.loginService(reqData).then((data)=> {
        console.log("Response from login", data);
        localStorage.setItem("token", data.data.token);
        this.$router.push({path:'/dashboard'})
      })
      .catch((error) => {
          console.log(error);
        });
    }
  },
};
</script>
  <style>
/* .to_Center {
    display: flex;
    justify-content: center;
    align-content: center;
    margin: 70px;
  } */

/* .center_box {
    width: 900px;
    height: 900px;
    padding: 48px 40px 36px 40px;
    margin: 0;
    border-style: solid;
    border-width: 1px;
    border-color: #9a9a9c;
    border-radius: 5px;
    box-sizing: content-box;
  } */

/* .box_with_paddingg {
    display: flex;
  } */

/* .create_tag {
    font-family: "sans-serif";
    font-size: 24px;
    align-content: center;
  } */

.email {
  width: 270px;
  display: flex;
}

.password {
  width: 270px;
  display: flex;
}

/* .headingtag {
    width: 368px;
    height: 50px;
    padding-top: 20px;
    padding-left: 100px;
    box-sizing: border-box;
  } */
.Forget_password {
  padding-left: 120px;
  margin-top: -15px;
}
/* .button_fb_google {
    padding-bottom: 90px;
    
} */
.btn {
  width:270px;
  margin-left: -30px;
  margin-top: 20px;
}
.fb_gle_btn {
  margin-top: 30px;
  margin-left: 10px;
  display: flex;
  flex-direction: row;
  gap:10px;
}

</style>