import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <footer className="page-footer">
      <div>
        <a href="https://twitter.com/Filipe__Freire" rel="noopener noreferrer" target="_blank">
          <FontAwesomeIcon icon={['fab', 'twitter']} /> Twitter
        </a>
        {' | '}
        <a href="https://github.com/filipe-freire/" rel="noopener noreferrer" target="_blank">
          <FontAwesomeIcon icon={['fab', 'github']} /> Github
        </a>
        {' | '}
        <a href="https://linkedin.com/in/filiperpfreire/" rel="noopener noreferrer" target="_blank">
          <FontAwesomeIcon icon={['fab', 'linkedin']} /> LinkedIn
        </a>
      </div>
    </footer>
  );
};

// <footer class="footer">
//       <p>Want to reach out? Find me on:</p>
//       <ul class="social-list">
//         <li class="social-list__item">
//           <a
//             class="social-list__link"
//             href="https://twitter.com/Filipe__Freire"
//             target="_blank"
//             rel="noreferrer"
//           >
//             <i class="fab fa-twitter fa-2x"></i>
//           </a>
//         </li>
//         <li class="social-list__item">
//           <a
//             class="social-list__link"
//             href="https://github.com/filipe-freire/"
//             target="_blank"
//             rel="noreferrer"
//           >
//             <i class="fab fa-github fa-2x"></i>
//           </a>
//         </li>
//         <li class="social-list__item">
//           <a
//             class="social-list__link"
//             href="https://linkedin.com/in/filiperpfreire/"
//             target="_blank"
//             rel="noreferrer"
//           >
//             <i class="fab fa-linkedin fa-2x"></i>
//           </a>
//         </li>
//       </ul>
//     </footer>
export default Footer;
