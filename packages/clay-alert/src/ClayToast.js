import './ClayAlertBase';
import Component from 'metal-component';
import defineWebComponent from 'metal-web-component';
import Soy from 'metal-soy';
import {Config} from 'metal-state';

import templates from './ClayToast.soy.js';

/**
 * Metal Clay Toast component.
 */
class ClayToast extends Component {
	handleHide_(event) {
		this.emit('hide', event);
	}
}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
ClayToast.STATE = {
	/**
	 * Flag to indicate if alert should be automatically closed.
	 * @instance
	 * @memberof ClayToast
	 * @type {?bool}
	 * @default false
	 */
	autoClose: Config.bool().value(false),

	/**
	 * Flag to indicate if the alert should be destroyen when close.
	 * @instance
	 * @memberof ClayToast
	 * @type {?bool}
	 * @default false
	 */
	destroyOnHide: Config.bool().value(false),

	/**
	 * The message of alert
	 * @instance
	 * @memberof ClayToast
	 * @type {!html|string}
	 */
	message: Config.any().required(),

	/**
	 * The path to the SVG spritemap file containing the icons.
	 * @instance
	 * @memberof ClayIcon
	 * @type {!string}
	 * @default undefined
	 */
	spritemap: Config.string().required(),

	/**
	 * The style of alert
	 * @instance
	 * @memberof ClayToast
	 * @type {?string}
	 * @default info
	 */
	style: Config.oneOf(['danger', 'info', 'success', 'warning']).value('info'),

	/**
	 * The title of alert
	 * @instance
	 * @memberof ClayToast
	 * @type {!string}
	 * @default undefined
	 */
	title: Config.string().required(),
};

defineWebComponent('clay-toast', ClayToast);

Soy.register(ClayToast, templates);

export {ClayToast};
export default ClayToast;
