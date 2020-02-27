<template>
    <div>
        <Breadcrumb :style="{ margin: '16px 0' }">
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Components</BreadcrumbItem>
            <BreadcrumbItem>Layout</BreadcrumbItem>
        </Breadcrumb>
        <Card>
            <template>
                <div style="height: 900px">
                    <BackTop></BackTop>
                </div>
            </template>
        </Card>
    </div>
</template>

<script>
export default {
    name: "dashboard",
};
</script>

<style scoped></style>
