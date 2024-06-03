<template>
    <div>
        <h2>콘솔을 확인합니다.</h2>
    </div>
</template>

<script setup>
const listUrl = '/todos';
const todoUrlPrefix = '/todos/';
import axios from 'axios';
const requestAPI = async () => {
    let todoList;
    let response = await axios.get(listUrl);
    todoList = response.data;
    console.log('# TodoList : ', todoList);
    for (let i = 0; i < todoList.length; i++) {
        response = await axios.get(todoUrlPrefix + todoList[i].id);
        console.log(`# ${i + 1}번째 Todo : `, response.data);
    }
};
requestAPI();
</script>
