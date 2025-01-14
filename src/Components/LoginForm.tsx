import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
const navigate = useNavigate();
    return (
        <form onSubmit={handleSubmit((data) => {
            console.log(data)
            navigate('/auth')
            })} className="flex flex-col gap-24  text-primary-white  px-12 justify-center h-full w-full">
            <h1 className="text-tertiary-successGreen font-semibold text-center text-2xl md:text-3xl">Login</h1>
            <div className="flex flex-col gap-4 w-full md:w-1/2 ml-0 md:ml-20">
                <label>Username:</label>
                <input key='1'  {...register('username')} className="h-10 px-3 ml-6 text-primary-eggWhite bg-primary-dark border-b-2 border-secondary-darkGrey1" placeholder="username" />
                <label>Password:</label>
                <input key='password' {...register('password', { required: true })} className="h-10  ml-6 px-3 text-primary-eggWhite bg-primary-dark border-b-2 border-secondary-darkGrey1" placeholder="password" />
                {errors.password && <p className="text-tertiary-errorRed">Password is incorect.</p>}
            </div>
            <button className="p-3 ml-0 md:ml-12 bg-primary-eggWhite text-primary-anthracite w-full md:w-48 rounded-md" type="submit">Submit</button>
        </form>
    );
}
