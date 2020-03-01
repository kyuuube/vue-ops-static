<template>
    <Card :bordered="false" :dis-hover="true">
        <p slot="title">线上热门搜索</p>
        <div slot="extra">
            <Dropdown placement="bottom-start">
                <Icon type="ios-more" />
                <DropdownMenu slot="list">
                    <DropdownItem>操作一</DropdownItem>
                    <DropdownItem>操作一</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
        <p>Content of card</p>
        <p>Content of card</p>
        <p>Content of card</p>
    </Card>
</template>

<script>
    export default {
        name:
    };
</script>

<style scoped>

</style>
