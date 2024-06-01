<script setup>
import useTaskStore from '@/store/taskStore'
import { onMounted, ref } from 'vue'
import useUserStore from '@/store/userStore'


const taskStore = useTaskStore()
const userStore = useUserStore()

let tasks = ref([])

const task = ref({
    title : '',
    description: '',
    endDate : '',
    status: 0,
})

onMounted(() => {
    taskStore.tasksList()
        .then((response) => {

            taskStore.tasks.value = response.data.tasks
            tasks.value = response.data.tasks
        })
        .catch((errors) => {
            console.log(errors)
        })
        console.log('aaaaaaaaaaaaaaaaaaaaaaa ', tasks.value)
        
})

</script>

<template>
 <section class="container mt-5">
        <div class="head text-left">
            <h3><i class="bi bi-journals"></i> Liste des taches</h3>
        </div><br>
        <div class="filter d-flex gap-3 mb-3">
            <span @click="statusFilter('terminé')">Terminé <i class="bi bi-arrow-down-up"></i></span>
            <span @click="statusFilter('non terminé')">Non terminé <i class="bi bi-arrow-down-up"></i></span>
        </div>
        <div class="tasks d-flex" v-for="(task, index) in tasks" :key="index">
            <Card :title="task.title" :description="task.description" :status="task.status" :index="index"
                @updateTask="handleUpdateTask" @updateStatus="ChangeStatus" @deleteTask="handleDeleteTask" />
        </div>

        <!-- New task modal -->
        <div class="d-flex new-button" data-bs-toggle="modal" data-bs-target="#TaskModal">
            +
        </div>
        <div class="modal fade" id="TaskModal" tabindex="-1" aria-labelledby="TaskModal" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <form @submit.prevent="saveTask">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="TaskModal">Nouvelle tache</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingInput" placeholder="lire un livre"
                                    v-model="task.title">
                                <label for="floatingInput">Titre</label>
                            </div>
                            <div class="form-floating">
                                <textarea class="form-control" placeholder="Leave a comment here"
                                    id="lire le livre de halland et faire un resumé" v-model="task.description"></textarea>
                                <label for="floatingTextarea">Description</label>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Annulé</button>
                            <button type="submit" class="btn btn-secondary" data-bs-dismiss="modal">{{ formAction == 'add' ?
                                'Enregistrer' :
                                'Modifier' }}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>



<style scoped>
.container {
    width: 80%;
    margin: auto;
    padding: 3% 4%;
    background-color: rgb(27, 27, 27, 0.5);
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
}

h3 {
    color: rgb(172, 112, 0);
}
span{
    color: rgb(184, 184, 184);
}
.filter {
    margin: auto;
}

.filter span {
    cursor: pointer;
}

.tasks {
    justify-content: center;
}

.head {
    margin: auto;
}

.new-button {
    justify-content: center;
    align-items: center;
    position: fixed;
    right: 50px;
    bottom: 50px;
    color: black;
    background-color: rgb(170, 170, 170);
    width: 50px;
    height: 50px;
    border-radius: 25px;
    cursor: pointer;
}
</style>