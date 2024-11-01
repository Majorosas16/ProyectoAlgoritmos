import { Actions } from '../types/store';

export const reducer = (currentAction: any, currentState: any) => {
	const { action, payload } = currentAction;

	switch (action) {
		case Actions.NAVIGATE:
			return {
				...currentState,
				screen: payload,
			};

			case Actions.SETUSERCREDENTIALS:
			return {
				...currentState,
				user: payload,
			};

		default:
			return currentState;
	}
};