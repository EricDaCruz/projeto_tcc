// import validator from "validar-telefone";
import { parse } from 'telefone'

const validDate = new RegExp("^[0-9]{4}[-][0-9]{2}[-][0-9]{2}$")

export const validatePhoneNumber = (phone) => {
   return parse(phone, { apenasCelular: true });
}
export const validateDateBorn = (date) => {
   return validDate.test(date)

}