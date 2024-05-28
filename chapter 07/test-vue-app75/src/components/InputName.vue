<template>
    <div style="border: solid 1px gray; padding: 5px">
        이름 : <input type="text" v-model="name" />
        <button @click="$emit('nameChanged', { name })">이벤트 발신</button>
    </div>
</template>

<script>
export default {
    name: "InputName",
    //emits : [ "nameChanged1"],
    emits: {
        nameChanged: (e) => {
            if (!e.name) {
                console.log("이름이 없습니다.");
                return false;
            }
            if (typeof e.name !== "string") {
                console.log("이름은 문자열이어야 합니다.");
                return false;
            }
            if (e.name.trim().length < 3) {
                console.log("이름은 3글자 이상이어야 합니다.");
                return false;
            }
            return true;
        },
    },
    data() {
        return {
            name: "",
        };
    },
};
</script>
