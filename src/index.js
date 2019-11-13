import dva from 'dva';
import './index.css';

// 1. Initialize
const app = dva({
    initialState: {
        products: [
            { name: 'dva', key: 1 },
            { name: 'antd', key: 2 },
            { name: 'd', key: 3 },
            { name: 'a', key: 4 },
        ]
    }
});

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/products').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
