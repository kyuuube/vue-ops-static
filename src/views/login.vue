<template>
    <div>
        <Button @click="login" type="info">login</Button>
    </div>
</template>

<script>
    // store
    import { mapActions } from "vuex";
    import * as $account from "src/store/modules/account/types";
    export default {
        name: "login",
        methods: {
            ...mapActions($account.namespace, {
                setToken: $account.actions.setToken,
                setUserInfo: $account.actions.setUserInfo,
            }),
            login() {
                this.setToken('sadfsadfasdfasdfasdfasdfasdfasdf')
                this.setUserInfo({})
                this.$router.push('/')
            }
        }
    };
</script>

<style scoped>

</style>
