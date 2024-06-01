import { defineStore } from "pinia";
import { deleteSingle, getAll, getSingle, postSIngle, updateSingle } from "@/services/axios";
import { ref } from "vue";

const taskStore = defineStore('task', () => {
    const tasks = ref([]);

    function tasksList () {
        return getAll('/task/all')
    }

    function singleTask (id) {
      return getSingle('/task/show/'+id+'')
    }
    
    function deleteTask (id) {
      return deleteSingle('/task/delete/'+id+'')
    }

    function storeTask (data) {
      return postSIngle('/task/create', data)
    }

    function updateTask (id, data) {
      return updateSingle('/task/update/'+id+'', data)
    }

    return {tasks, tasksList, singleTask, deleteTask, storeTask, updateTask}
  })

export default taskStore