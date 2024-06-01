<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    'title': String,
    'description': String,
    'status': String,
    'index': Number,
});
const emits = defineEmits(['updateTask', 'deletetask', 'updateStatus']);

const toggleUpdateTask = () => {
    return emits('updateTask', props.index)
}
const toggleDeletetask = () => {
    return emits('deleteTask', props.index)
}
const changeStatus = () => {
    emits('updateStatus', props.index)
}
</script>

<template>
    <div class="card mb-5" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title ">
                <input type="checkbox" :name="'status'+index" :id="'status'+index" :checked="props.status == 'terminé' ? 1 : 0" @change="changeStatus">&ensp;
                {{ props.title }}
            </h5>
            <p class="card-text">{{ props.description }}</p>
            <div class="card-footer text-body-secondary d-flex justify-content-between">
                <span>{{ props.status }}</span>
                <div class="action d-flex gap-3">
                    <a @click="toggleUpdateTask" data-bs-toggle="modal" data-bs-target="#TaskModal"><i class="bi bi-pencil-square"></i></a>
                    <a @click="toggleDeletetask"><i class="bi bi-trash"></i></a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card {
    width: 100% !important;
    background-color: rgb(27, 27, 27, 0.5);
    color: rgb(184, 184, 184);
}

.card a {
    cursor: pointer;
    color: rgb(184, 184, 184);
}
</style>