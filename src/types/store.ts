export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
	screen: string;
	user: '',
	posts: post[],
};

type post = {
	user: string,
	bio: string,
	imagecover: string,
	titlereview: string,
	rating: string,
	name: string,
	review: string,
}

export enum Screens {
	'LOGIN' = 'LOGIN',
	'DASHBOARD' = 'DASHBOARD',
	'REGISTER' = 'REGISTER',
	'FORMREVIEW' = 'FORMREVIEW',
	'FAVORITOS' = 'FAVORITOS',
	'PROFILE' = 'PROFILE',
	'FOLLOWS' = 'FOLLOWS',
	'PROFILEEDIT' = 'PROFILEEDIT'
}

export enum Actions {
	'NAVIGATE' = 'NAVIGATE',
	'SETUSERCREDENTIALS' = 'SETUSERCREDENTIALS'
}