import { defineStore } from "pinia";
import { getSingle, postSIngle } from "@/services/axios";
import { ref } from "vue";

const userStore = defineStore('users', () => {
    const user = ref({});

    function register(data){
        return postSIngle('/user/register', data) 
    }
    function login(data){
        return postSIngle('/user/login', data) 
    }
    function getUser(){
        return getSingle('/user') 
    }
    

    return {user, register, login,  getUser}
  })

export default userStore