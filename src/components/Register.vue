<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field
      v-model="role"
      :rules="nameRules"
      label="role"
      required
      outlined
      dense
    >
    </v-text-field>

    
    <v-text-field
      v-model="FirstName"
      :rules="nameRules"
      label="FirstName"
      required
      outlined
      dense
    >
    </v-text-field>

    <v-text-field
      v-model="LastName"
      :rules="nameRules"
      label="LastName"
      required
      outlined
      dense
    ></v-text-field>
    
    <v-text-field
      v-model="phone"
      
      label="phoneNumber"
      required
      outlined
      dense
    >
    </v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
      outlined
      dense
    >
    </v-text-field>

    <v-text-field
      v-model="Password"
      type="password"
      label="Password"
      required
      outlined
      dense
    >
    </v-text-field>

    <v-text-field
      v-model="Confirm"
      type="password"
      label="Confirm"
      required
      outlined
      dense
    >
    </v-text-field>
  <div>
      <v-btn :disabled="!valid" color="#a03037" class="btnalign" @click="validate">
        <div style="margin-left: -50px;color: white;">
        SignUp
      </div>
      </v-btn>
    </div>
  </v-form>
</template>
<script>
import UserService from "@/Services/UserService/UserService";
export default {
  name: "RegistrationComponent",
  data: () => ({
    valid: true,
    role:"",
    FirstName: "",
    LastName: "",
    phone:"",
    email: "",
    Password: "",
    Confirm: "",
    SignUp: "",
    
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],

    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
      console.log(this.FirstName);
      console.log(this.LastName);
      console.log(this.phone);
      console.log(this.email);
      
      console.log(this.Password);
      console.log(this.Confirm);
      let reqData = {
        role:this.role,
    first_name:this.FirstName,
        last_name:this.LastName,
        phone_no:this.phone,
        email:this.email,
        
        password:this.Password,
        confirm_password:this.Confirm
      };
      UserService.prototype
        .registerService(reqData)
        .then((data) => {
          console.log("Response from Registration", data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
/* .button {
    top: 500px;
          left: 300px;
          width: 500px;
          height: 37px;
          background: #a03037 0% 0% no-repeat padding-box;
          border-radius: 3px;
          color: #ffffff;
          opacity: 1; 
        
      
  } */
  .btnalign {
    width:400px;
    
  }
</style>
