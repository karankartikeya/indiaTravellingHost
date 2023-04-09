import Link from 'next/link'
import { useRouter } from 'next/router';
import React, { useState } from 'react'

type Props = {}

function SignIn({ }: Props) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        password: '',
    });
    const { name, email, phoneNumber, password } = formData;
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const router = useRouter();
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className='grid grid-cols-1 md:grid-cols-1 h-screen w-full'>


            <div className='bg-gradient-to-r from-[#cab59e] to-[#dcad51] flex flex-col justify-center'>

                <form className='max-w-[400px] w-full mx-auto rounded-lg space-y-4  p-8 px-8' onSubmit={onSubmit}>
                    <h2 className='text-5xl uppercase dark:text-white font-extrabold text-center mb-10'>Login	</h2>

                    <div className='flex flex-col text-black py-2'>
                        <label className='font-bold text-lg'>Email</label>
                        <input className='p-2 rounded-lg bg-white mt-2 focus:border-red-500' id="email"
                            type="email"
                            placeholder="abc@gmail.com"
                            name='email'
                            required={true}
                            value={email}
                            onChange={onChange} />
                    </div>

                    <div className='flex flex-col text-black py-2'>
                        <label className='font-bold text-lg'>Password</label>
                        <input className='p-2 rounded-lg bg-white mt-2 focus:border-blue-500' id="password"
                            type="password"
                            minLength={6}
                            placeholder="********"
                            name='password'
                            value={password}
                            required={true}
                            onChange={onChange}
                            maxLength={10} />
                    </div>
                    <button className='w-full my-5 py-2 bg-red-500 shadow-lg shadow-red-500/50 hover:shadow-red-500/40 text-white font-semibold rounded-lg' type='submit'>SignIn</button>
                    <div className='flex items-center justify-center text-gray-400 font-semibold py-2'>
                        <Link href='/' className='items-center'>Cancel</Link>
                    </div>

                    <div className='text-center '>
                        <p className='text-blue-500 font-semibold cursor-pointer'>
                            <Link href='/register'>Not a user? Sign Up Now!!</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignIn