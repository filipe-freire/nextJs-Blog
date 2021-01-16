import ThemeProvider from 'providers/ThemeProvider';
import { library, config } from '@fortawesome/fontawesome-svg-core';
import {
  faSun,
  faMoon,
  faBorderAll,
  faList,
  faSortNumericDown,
  faSortNumericUp
} from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

config.autoAddCss = false;
library.add(
  faList,
  faBorderAll,
  faSortNumericDown,
  faSortNumericUp,
  faSun,
  faMoon,
  faTwitter,
  faLinkedin,
  faGithub
);

import '@fortawesome/fontawesome-svg-core/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'highlight.js/styles/ir-black.css'; // highlight.js/static/demo
import 'react-toggle/style.css'; // Theme Toggler Button
import 'styles/index.scss';

// export default ({ Component, pageProps }) => (
//   <ThemeProvider>
//     <Component {...pageProps} />
//   </ThemeProvider>
// );

const App = ({ Component, pageProps }) => (
  <ThemeProvider>
    <Component {...pageProps} />;
  </ThemeProvider>
);
export default App;
