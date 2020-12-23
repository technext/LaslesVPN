import { getItemFromStore } from './utils';

/* -------------------------------------------------------------------------- */
/*                             Live Configuration                             */
/* -------------------------------------------------------------------------- */

const isFluid = getItemFromStore('isFluid', false);
const isRTL = getItemFromStore('isRTL', false);
const navbarPosition = getItemFromStore('navbarPosition', 'vertical');
const navbarStyle = getItemFromStore('navbarStyle', 'transparent');

const setCheckInputValue = (id, value) => {
  const input = document.getElementById(id);
  input && (input.checked = value);
};

setCheckInputValue('mode-fluid', isFluid);
setCheckInputValue('mode-rtl', isRTL);
setCheckInputValue(`option-navbar-${navbarPosition}`, true);
setCheckInputValue(`navbar-style-${navbarStyle}`, true);

if (navbarPosition === 'top') {
  const buttonGroups = document.querySelector('.btn-group-navbar-style');
  buttonGroups &&
    buttonGroups.querySelectorAll('.btn-check').forEach((input) => {
      input.setAttribute('disabled', true);
    });
}

const storage = {
  isRTL,
  isFluid,
};
export default storage;
