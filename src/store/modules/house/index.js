import persistedState from "src/common/persistedState";
import {
    namespace,
    getters as $getters,
    actions as $actions,
    mutations as $mutations
} from "./types";

const state =  persistedState(namespace, {
    houseFullName: "",
}, {
    // ...other
})

const mutations = {
    [$mutations.houseFullName]: (state, data) => {
        state.houseFullName = data;
    }
};

const actions = {
    [$actions.setHouseFullName]: ({ commit }, data) => {
        commit($mutations.houseFullName, data);
    }
};

const getters = {
    [$getters.houseFullName]: (state) => state.houseFullName,
};


export default {

    namespaced: true,

    state,

    getters,

    actions,

    mutations
};
