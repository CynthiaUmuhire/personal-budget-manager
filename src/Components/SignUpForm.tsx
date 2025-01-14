import { useForm } from "react-hook-form";

export default function SignUpForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    return (
        <form onSubmit={handleSubmit((data) => {
            console.log(data)

            })} className="flex flex-col gap-24  text-primary-white px-12 justify-center h-full w-full">
            <h1 className="text-tertiary-successGreen font-semibold text-center text-2xl md:text-3xl">Sign Up</h1>
            <div className="flex flex-col gap-4 w-full md:w-1/2 ml-0 md:ml-20  overflow-scroll">
                <label>First name:</label>
                <input {...register('firstname')} className="h-10 px-3 ml-6 text-primary-eggWhite bg-primary-dark border-b-2 border-secondary-darkGrey1" placeholder="Your first name" />
                <label>Last name:</label>
                <input {...register('lastname')} className="h-10 px-3 ml-6 text-primary-eggWhite bg-primary-dark border-b-2 border-secondary-darkGrey1" placeholder="Your last name" />
                <label>username:</label>
                <input key='username' {...register('username')} className="h-10 px-3 ml-6 text-primary-eggWhite bg-primary-dark border-b-2 border-secondary-darkGrey1" placeholder="username" />
                <label>Password:</label>
                <input key='password' {...register('password', { required: true })} className="h-10  ml-6 px-3 text-primary-eggWhite bg-primary-dark border-b-2 border-secondary-darkGrey1" placeholder="password" />
                {errors.password && <p className="text-tertiary-errorRed">Password is incorect.</p>}
                <label>Confirm Password:</label>
                <input {...register('Confirmpassword', { required: true })} className="h-10  ml-6 px-3 text-primary-eggWhite bg-primary-dark border-b-2 border-secondary-darkGrey1" placeholder="Confirm password" />
                {errors.password && <p className="text-tertiary-errorRed">Password is incorect.</p>}
            </div>
            <button className="p-3 ml-0 md:ml-12 bg-primary-eggWhite text-primary-anthracite w-full md:w-48 rounded-md" type="submit">Submit</button>
        </form>
    );
}
