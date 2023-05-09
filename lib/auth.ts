import bcrypt from 'bcrypt'

export const hashPassword = (password:any) => bcrypt.hash(password,10);