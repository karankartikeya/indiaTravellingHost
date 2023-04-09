import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link';

type Props = {

}

function Registration({ }: Props) {


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
	}

	return (
		<div className='grid grid-cols-1 md:grid-cols-1 bg-gradient-to-r from-[#cab59e] to-[#dcad51] h-screen w-full'>

			<div className='bg-gradient-to-r from-[#cab59e] to-[#dcad51] flex flex-col justify-center'>
				<form className='max-w-[400px] w-full mx-auto space-y-2 rounded-lg  p-8 px-8' onSubmit={onSubmit}>
					<h2 className='text-5xl uppercase dark:text-white font-extrabold mb-10 text-center'>Register	</h2>
					<div className='flex flex-col text-black py-2'>
						<label className='font-bold text-lg'>Name</label>
						<input className='rounded-lg bg-white mt-2 p-2 focus:border-blue-500  focus:outline-none' id="firstName" type="text"
							placeholder="Shivansh Sinha"
							name='name'
							value={name}
							required={true}
							onChange={onChange}
						/>
					</div>
					<div className='flex flex-col text-black py-2'>
						<label className='font-bold text-lg'>Email</label>
						<input className='p-2 rounded-lg bg-white mt-2 focus:border-blue-500  focus:outline-none' id="email"
							type="email"
							placeholder="abc@gmail.com"
							name='email'
							required={true}
							value={email}
							onChange={onChange} />
					</div>
					<div className='flex flex-col text-black py-2'>
						<label className='font-bold text-lg'>PhoneNumber</label>
						<input className='p-2 rounded-lg bg-white mt-2 focus:border-blue-500  focus:outline-none' id="phoneNumber"
							type="text"
							minLength={10}
							placeholder="78001*****"
							name='phoneNumber'
							value={phoneNumber}
							required={true}
							onChange={onChange}
							maxLength={10} />
					</div>
					<div className='flex flex-col text-black py-2'>
						<label className='font-bold text-lg'>Password</label>
						<input className='p-2 rounded-lg bg-white mt-2 focus:border-blue-500  focus:outline-none' id="password"
							type="password"
							minLength={6}
							placeholder="78001*****"
							name='password'
							value={password}
							required={true}
							onChange={onChange}
							maxLength={10} />
					</div>
					<button className='w-full my-5 py-2 bg-red-500 shadow-lg shadow-red-500/50 hover:shadow-red-500/40 text-white font-semibold rounded-lg' type='submit'>Register</button>
					<div className='flex items-center justify-center text-gray-400 py-2'>
						<Link href='/' className='items-center font-semibold'>Cancel</Link>
					</div>

					<div className='text-center '>
						<p className='text-blue-500 font-semibold cursor-pointer'>
							<Link href='/login'>Already a user ? Sign in </Link>
						</p>
					</div>
				</form>
			</div>
		</div>
	)
};
export default Registration
