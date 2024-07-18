import { IsEmail, IsNotEmpty,IsString, MinLength } from "class-validator";


export class UserSignup{

    @IsNotEmpty({message:'name cannot be null'})
    @IsString({message:'name should be string'})
    name:string;

    @IsNotEmpty()
    @IsEmail({},{message:'pleas provide in email format'})
    email:string


    @IsNotEmpty()
    @MinLength(5,{message:'password should have minimum 5 characters'})
    password:string





}