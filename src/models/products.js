export default {
    namespace: 'products',
    state: [],
    reducers: {
        'delete'(state, { payload: key }) {
            return state.filter(item => item.key !== key);
        }
    }
}