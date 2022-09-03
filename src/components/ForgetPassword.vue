<template>
  <div>
  <AppBar></AppBar>
 
  <div class="centrealign">
    
    <div class="heading_tag">
      <h3>Forgot Your Password?</h3>
    </div>
    <div class="centerebox">
      <div class="box_with_paddingg">
        <div class="leftBox">
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-col>
              <span
                >Enter your email address and we'll send you a link to reset
                your password</span
              >

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

              <!-- <div class="paragraph">
                  <p>Not your computer? Use Guest mode to sign in privately.</p>
               
                <div>
                  <a
                    href="http://localhost:8080/forget"
                    class="Forget_password"
                    width="368"
                    height="20"
                    >Forget password</a
                  >
                </div>
                </div> -->
              <div class="reset_button">
                <v-btn
                  :disabled="!valid"
                  color="#A03037"
                  class="mr-4"
                  @click="validate"
                >
                  Reset Password
                </v-btn>
                <div class="hhh">
                  <v-btn 
                  href="http://localhost:8080/admin"  
                  elevation="0.5"
                    style="margin-top: 44px; width:354px;height:100px;margin-left:-50px" 
                    >CREATE ACCOUNT</v-btn
                  >
                </div>
              </div>
            </v-col>
          </v-form>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
  
  <script>
import AppBar from "./AppBar.vue";

import UserService from '@/Services/UserService/UserService';

export default {
    name: "ForgetPasswordComponent",
    data: () => ({
        valid: true,
        Password: "",
        passwordRules: [
            (v) => !!v || "password is required",
            (v) => (v && v.length <= 10) || "password must be less than 10 characters",
        ],
        email: "",
        emailRules: [
            (v) => !!v || "E-mail is required",
            (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
        ],
    }),
    methods: {
    validate() {
      this.$refs.form.validate();
      console.log(this.email);
      let reqData= {
        email:this.email,
        
      }
    UserService.prototype.forgetPasswordService(reqData).then((data)=>{
        console.log("Response from forgotPassword",data);
    }).catch((error)=>{
        console.log(error);
    })

    },
      
  },
  components: {  AppBar }
};
    
    

</script>
  <style>
.centrealign {
  display: flex;
  /* justify-content: center; */
  align-content: center;
  margin: 70px;
  margin-left: 300px;
}

.centerebox {
  width: 310px;
  height: 300px;
  padding: 48px 40px 36px 40px;
  margin: 0;
  border-style: solid;
  border-width: 1px;
  border-color: #9a9a9c;
  border-radius: 5px;
  box-sizing: content-box;
}

.box_with_paddingg {
  display: flex;
}

.leftBox {
  width: 300px;
  height: 400px;
}

.first_last_name {
  width: 75%;
  display: flex;
  flex-direction: row;
  gap: 40px;
}

.create_tag {
  font-family: "sans-serif";
  font-size: 24px;
  align-content: center;
}

.email {
  padding-top: 40px;
  width: 270px;
}

.password {
  width: 270px;
  display: flex;
}

.reset_button {
  top: 379px;
  left: 559px;
  width: 292px;
  height: 37px;
  /* UI Properties */
  background: #a03037 0% 0% no-repeat padding-box;
  border-radius: 3px;
  opacity: 1;
}

.heading_tag {
  /* width: 368px;
    height: 50px;
    margin-top: -50px;
    margin-left: 200px;
    box-sizing: border-box; */
  position: relative;
  left: 300px;
  top: -40px;
}
.paragraph {
  padding-left: 10px;
}
.route-link2 {
  padding-left: 30px;
  position: static;
  top: 100px;
}
.createAccount {
  background-color: #f9f9f8;
  width: 390px;
  height: 100px;
  margin-top: 45px;
  margin-left: -52px;
  /* padding: 50px;
  margin: 20px; */
}
</style>