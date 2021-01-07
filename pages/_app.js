import { library, config } from '@fortawesome/fontawesome-svg-core';
import { faBorderAll, faList } from '@fortawesome/free-solid-svg-icons';

config.autoAddCss = false;
library.add(faList, faBorderAll);

import '@fortawesome/fontawesome-svg-core/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'highlight.js/styles/ir-black.css'; // highlight.js/static/demo
import 'styles/index.scss';

const App = ({ Component, pageProps }) => <Component {...pageProps} />;
export default App;
