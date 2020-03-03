<template>
    <Card :bordered="false" :dis-hover="true">
        <p slot="title">{{title}}</p>
        <div slot="extra">
            <slot name="extra"></slot>
<!--            <Dropdown placement="bottom-start">-->
<!--                <Icon type="ios-more" />-->
<!--                <DropdownMenu slot="list">-->
<!--                    <DropdownItem>操作一</DropdownItem>-->
<!--                    <DropdownItem>操作一</DropdownItem>-->
<!--                </DropdownMenu>-->
<!--            </Dropdown>-->
        </div>
        <slot></slot>
    </Card>
</template>

<script>
    export default {
        name: "base-dashboard-card",
        props: {
            title: String,
        }
    };
</script>

<style scoped>

</style>
