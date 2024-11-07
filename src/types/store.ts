export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
	screen: string;
	user: ''
};

export enum Screens {
	'LOGIN' = 'LOGIN',
	'DASHBOARD' = 'DASHBOARD',
	'REGISTER' = 'REGISTER',
	'FORMREVIEW' = 'FORMREVIEW'
}

export enum Actions {
	'NAVIGATE' = 'NAVIGATE',
	'SETUSERCREDENTIALS' = 'SETUSERCREDENTIALS'
}