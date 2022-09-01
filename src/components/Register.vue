<template>
    <v-form>
      <v-text-field
        outlined
        dense
        v-model="form.role"
        label="Role"
        autocomplete="off"
        required

        
      ></v-text-field>      
      <v-text-field
        outlined
        dense
        
        label="FirstName"
        autocomplete="off"
        required
        v-model="form.firstName"
        
      ></v-text-field>
      
      <v-text-field
        outlined
        dense
        v-model="form.lastName"
        label="LastName"
        required
        autocomplete="off"
        :rules="[nameRules.required, nameRules.name_length,nameRules.regex]"
      ></v-text-field>
      <v-text-field
          outlined
          dense
          autocomplete="off"
          v-model="form.phoneNumber"
          
          label="Phone Number"
          required
        >
        </v-text-field>
      
      <v-text-field
        outlined
        dense
        label="E-mail"
        v-model="form.email"
        autocomplete="off"
        :rules="[emailRules.required, emailRules.email_validation]"
      ></v-text-field>
      <v-text-field
        outlined
        dense
        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="() => (showPassword = !showPassword)"
        :type="showPassword ? 'text' : 'password'"
        v-model="password"
        label="Password"
        :rules="[passwordRules.required, passwordRules.minLength]"
      ></v-text-field>
      <v-text-field
        outlined
        dense
        label="Confirm Password"
        :append-icon="showCPassword ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="() => (showCPassword = !showCPassword)"
        :type="showCPassword ? 'text' : 'password'"
        v-model="cpassword"
        :rules="[passwordRules.required, passwordRules.minLength]"
      ></v-text-field>
      <button  class="button" @click="validate">SignUp</button>
    </v-form>
  </template>
  
  
  <script>
  
  export default {
      name: 'RegistrationComponent',
      data: () => ({
          form: {
              role: '',
              firstName: '',
              lastName: '',
              phoneNumber:'',
              email: '',
              password: '',
              cpassword: '',
          },
          showPassword: false,
          showCPassword: false,
          sending: false,
          nameRules: {
              required: (v) => !!v || "Name is required",
              name_length: (v) =>
                  (v && v.length <= 10) || "Name must be less than 10 characters",
              regex: (v) => /^[a-zA-Z]/.test(v) || "Name can not be a Number",
          },
          emailRules: {
              required: (v) => !!v || "E-mail is required",
              email_validation: (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
          },
          passwordRules: {
              required: (v) => !!v || "Name is required",
              minLength: (v) => (v && v.length > 7) || "Password must be 8 characters",
          },
      }),

  }
  </script>
  <style scoped>
  .button {
    top: 398px;
          left: 727px;
          width: 270px;
          height: 37px;
          background: #a03037 0% 0% no-repeat padding-box;
          border-radius: 3px;
          color: #ffffff;
          opacity: 1; 
        
      
  }
  .brown {
      background-color: brown;
  }
  .lightBrown {
      background-color: lightblue;
  }
  </style>