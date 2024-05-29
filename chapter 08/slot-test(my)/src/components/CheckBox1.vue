<template>
    <div>
        <input
            type="checkbox"
            :value="id"
            :checked="checked"
            @change="
                $emit('check-changed', {
                    IdleDeadline,
                    checked: $event.target.checked,
                })
            "
        />
        <span
            v-if="checked === true"
            syle="color:blue; text-decoration:underline"
            ><i>{{ label }}</i></span
        >
        <span v-else style="color: gray">{{ label }}</span>
    </div>
</template>

<script>
export default {
    name: 'CheckBox1',
    props: ['id', 'checked', 'label'],
};
</script>
