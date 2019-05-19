import { addBurger, updateBurger, getBurger } from "../config/orm";
//model porcesses data before entering into database. Via orm.
const getAllBurgers = () =>  getBurger()

const addABurger = (burger) => addBurger(burger)

const updateABurger = (burger) => updateBurger(burger)

module.exports= {

addABurger,
updateABurger,
getAllBurgers,

}
