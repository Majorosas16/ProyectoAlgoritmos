export interface Product {
    user: string,
    bio: string,
    imagecover: string,
    titlereview: string,
    rating: string,
    name: string,
    review: string
}

export enum Attribute {
    // "imageprofile" = "imageprofile",
    "user" = "user",
    "bio" = "bio",
    "imagecover" = "imagecover",
    "titlereview" = "titlereview",
    "rating" = "rating",
    "dateadded" = "dateadded",
    "name" ="name",
    "review"="review"
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