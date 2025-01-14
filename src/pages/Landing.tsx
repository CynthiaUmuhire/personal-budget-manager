import { useState } from "react";
import Wallet from "../assets/wallet";
import LoginForm from "../Components/LoginForm";
import SignUpForm from "../Components/SignUpForm";

export default function Landing() {
    const [loginView, setloginView] = useState<boolean>(true);
    return (
        <div className="flex flex-col md:flex-row items-center h-full">
            <div className="flex flex-col h-full w-full md:w-4/5 justify-between px-8">
                <h1 className="text-2xl font-light italic mt-20 md:mt-40 animate-pulse">
                    Calculate smarter,
                    <br />
                    spend wiser ...
                </h1>
                <div className="min-h-32 max-h-60 md:h-1/2 ">
                <Wallet />
                </div>
            </div>
            <div className=" bg-primary-dark  w-full h-full flex flex-col py-8 md:py-20 justify-center items-center">
               {loginView ? <LoginForm /> : null}
               {!loginView ? <SignUpForm /> : null}
                <p className="text-tertiary-successGreen font-thin underline text-2xl cursor-pointer " onClick={() => setloginView((prev)=>!prev)}>{loginView ? 'Sign Up':'Login'}</p>
            </div>
        </div>
    )
}