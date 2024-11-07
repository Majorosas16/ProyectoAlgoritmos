export interface Product {
	name: string;
	price: number;
}

export enum Attribute {
    "imageprofile" = "imageprofile",
    "user" = "user",
    "bio" = "bio",
    "imagecover" = "imagecover",
    "titlereview" = "titlereview",
    "rating" = "rating",
    "dateadded" = "dateadded",
}

 export const credentials = {
	email: '',
	password: '',
    confirmPassword: '',
	name: '',
    bio : ''
 };

 export const review = { //dummie o esta inicial
    title: '',
    name: '',
    rating: 1,
    image: '',
    review: ''
}