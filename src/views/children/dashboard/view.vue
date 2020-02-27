<template>
    <div class="dashboard">
        <Row :gutter="36">
            <Col span="6">
                <page-view-chart></page-view-chart>
            </Col>
            <Col span="6">
                <page-view-chart></page-view-chart>
            </Col>
            <Col span="6">
                <page-view-chart></page-view-chart>
            </Col>
            <Col span="6">
                <page-view-chart></page-view-chart>
            </Col>
        </Row>
    </div>
</template>

<script>
    // components
    import PageViewChart from './components/PageViewChart'
export default {
    name: "dashboard",
    components: {
        PageViewChart
    }
};
</script>

<style scoped>
    .dashboard {
    }
</style>
