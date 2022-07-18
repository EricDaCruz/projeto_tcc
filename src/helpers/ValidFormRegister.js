// import validator from "validar-telefone";
import { parse } from 'telefone'

export const validatePhoneNumber = (phone) => {
   return parse(phone, { apenasCelular: true });
}