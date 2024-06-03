<template>
    <div>
        <h2>콘솔을 확인합니다.</h2>
    </div>
</template>

<script setup>
import axios from 'axios';

// const listUrl = '/todos';
// const todoUrlPrefix = '/todos/';

const requestAPI = () => {
    // const url = '/todos/1';
    const url = '/todos/1';
    axios.get(url).then((response) => {
        console.log('# 응답객체 : ', response);
    });
    // let todoList = [];
    // axios
    //     .get(listUrl)
    //     .then((response) => {
    //         todoList = response.data;
    //         console.log('# TodoList : ', todoList);
    //         return todoList[0].id;
    //     })
    //     .then((id) => {
    //         return axios.get(todoUrlPrefix + id);
    //     })
    //     .then((response) => {
    //         console.log('## 첫번째 Todo : ', response.data);
    //         return todoList[1].id;
    //     })
    //     .then((id) => {
    //         axios.get(todoUrlPrefix + id).then((response) => {
    //             console.log('## 두번째 Todo : ', response.data);
    //         });
    //     });
};
requestAPI();
</script>
