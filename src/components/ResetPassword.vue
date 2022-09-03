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
                  
                <div class="email">
                  <v-text-field
                    outlined
                    dense
                    autocomplete="off"
                    v-model="password"
                    :rules="passwordRules"
                    label="New PassWord"
                    required
                  >
                  </v-text-field>
                </div>
  
                <div class="password">
                  <v-text-field
                    outlined
                    dense
                    autocomplete="off"
                    v-model="confirm"
                    :rules="passwordRules"
                    label="Confirm Password"
                    required
                  >
                  </v-text-field>
                </div>
              
                <div class="reset_button">
                  <v-btn
                    :disabled="!valid"
                    color="#A03037"
                    class="mr-4"
                    @click="validate"
                  >
                    Reset Password
                  </v-btn>
                  
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
      name: "ResetPasswordComponent",
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
        console.log(this.password);
        console.log(this.confirm);
        
        let reqData= {
            new_password:this.password,
            password_confirmation:this.confirm
          
          
        }
      UserService.prototype.resetPasswordService(reqData).then((data)=>{
          console.log("Response from ResetPassword",data);
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