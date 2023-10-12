import {string,number,bool,oneOf,shape} from 'prop-types'

export const PersonaShape = shape({
    id: number.isRequired,
    title: string,
    brand:string,
    category:string,
    description:string,
    discountPercentage:number,
    price: number,
    rating: number,
    stock: number,
})