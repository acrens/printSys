<template>
    <li>
        <input type="radio" :id="'sizelist-' + sizelist.id" name="header-check" :checked="sizelist.status" @click="changeSize({sizelist})">
        <label :for="'sizelist-' + sizelist.id">{{ sizelist.text }}</label>
    </li>
</template>

<script>
    import { mapMutations } from 'vuex';
    
    export default {
        name: 'HeaderChoose',
        props: ['sizelist'],
        methods: {
            ...mapMutations([
                'changeSize'
            ])
        }
    }
</script>