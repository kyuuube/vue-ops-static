<template>
    <div class="dashboard">
        <Row :gutter="25">
            <Col span="6">
                <count-sales></count-sales>
            </Col>
            <Col span="6">
                <page-view-chart></page-view-chart>
            </Col>
            <Col span="6">
                <page-view-line-chart-small></page-view-line-chart-small>
            </Col>
            <Col span="6">
                <mini-progress></mini-progress>
            </Col>
        </Row>
        <div class="dashboard-page-view-line">
            <div class="date-range">
                <DatePicker
                    :value="range"
                    type="daterange"
                    confirm
                    placement="bottom-end"
                    placeholder="Select date"
                    style="width: 200px"
                ></DatePicker>
            </div>
            <Tabs value="name1">
                <TabPane label="销售额" name="name1">
                    <Row type="flex">
                        <Col span="18">
                            <div class="page-view-line-chart-warp">
                                <h4>销售趋势</h4>
                                <page-view-line-chart></page-view-line-chart>
                            </div>
                        </Col>
                        <Col span="6">
                            <div class="ranking-list-warp">
                                <h4>门店销售额排名</h4>
                                <ul class="dashboard-ranking-List">
                                    <li :key="i" v-for="i in 7">
                                        <span class="ranking-item-order">{{
                                            i
                                        }}</span
                                        ><span class="ranking-item-title"
                                            >工专路 {{ i }} 号店</span
                                        ><span>323,234</span>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane label="访问量" name="name2"> </TabPane>
            </Tabs>
        </div>
        <Row type="flex" class="row-warp" :gutter="25">
            <Col span="12">
                <base-dashboard-card title="线上热门搜索">
                    <Dropdown slot="extra" placement="bottom-start">
                        <Icon type="ios-more" />
                        <DropdownMenu slot="list">
                            <DropdownItem>操作一</DropdownItem>
                            <DropdownItem>操作一</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <Row>
                        <Col :span="12">
                            <sample-mini-chart-box></sample-mini-chart-box>
                        </Col>
                        <Col :span="12"></Col>
                    </Row>
                    <table-list></table-list>
                </base-dashboard-card>
            </Col>
            <Col span="12">
                <base-dashboard-card title="销售额类别占比">
                    <pic-chart></pic-chart>
                </base-dashboard-card>
            </Col>
        </Row>
    </div>
</template>

<script>
// components
import PageViewChart from './components/PageViewChart';
import PageViewLineChart from './components/PageViewLineChart';
import CountSales from './components/CountSales';
import PageViewLineChartSmall from './components/PageViewLineChartSmall';
import BaseDashboardCard from './components/BaseDashboardCard';
import MiniProgress from './components/MiniProgress';
import PicChart from './components/PicChart';
import TableList from './components/TableList';
import SampleMiniChartBox from './components/SampleMiniChartBox';
export default {
    name: 'dashboard',
    components: {
        PageViewChart,
        PageViewLineChart,
        CountSales,
        PageViewLineChartSmall,
        MiniProgress,
        BaseDashboardCard,
        PicChart,
        TableList,
        SampleMiniChartBox
    },
    data() {
        return {
            range: ''
        };
    }
};
</script>

<style lang="less">
.dashboard {
    .dashboard-page-view-line {
        position: relative;
        margin-top: 25px;
        background-color: #ffffff;
        padding: 0 10px;
        .ivu-tabs-tab {
            padding: 16px;
        }
        .date-range {
            position: absolute;
            right: 10px;
            top: 10px;
            z-index: 2000;
        }
        .page-view-line-chart-warp {
            h4 {
                margin-left: 20px;
            }
        }
        .ranking-list-warp {
            padding: 0 32px 32px 52px;
        }
        .dashboard-ranking-List {
            margin: 25px 0 0;
            padding: 0;
            list-style: none;
            li {
                display: flex;
                align-items: center;
                margin-top: 16px;
                zoom: 1;
                span {
                    color: rgba(0, 0, 0, 0.65);
                    font-size: 14px;
                    line-height: 22px;
                }
                .ranking-item-title {
                    flex: 1 1;
                    margin-right: 8px;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
                .ranking-item-order {
                    display: inline-block;
                    width: 20px;
                    height: 20px;
                    margin-top: 1.5px;
                    margin-right: 16px;
                    font-weight: 600;
                    font-size: 12px;
                    line-height: 20px;
                    text-align: center;
                    background-color: #fafafa;
                    border-radius: 20px;
                }
            }
        }
    }
    .row-warp {
        margin-top: 25px;
    }
}
</style>
