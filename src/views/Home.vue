<template>
    <div class="home">
        <a-button @click="out">{{username}}</a-button>
        <a-avatar shape="square" :size="128" :src="avatar"/>
        <a-button>{{email}}</a-button>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        name: 'home',
        computed: {
            ...mapGetters([
                'avatar',
                'username',
                'email'
            ])
        },
        methods: {
            out() {
                this.$store.dispatch('Logout').then(() => window.location.reload())
            }
        }
    }
</script>
