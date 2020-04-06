<template>
    <Modal :value="value" width="360">
        <div slot="footer">
            <Button type="error" size="large" long :loading="modal_loading" @click="del">Delete</Button>
        </div>
    </Modal>
</template>

<script>
    export default {
        name: "modify-dialog"
    };
</script>

<style scoped>

</style>
