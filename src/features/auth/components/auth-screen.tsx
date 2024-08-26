'use client'

import { SignInFlow } from '@/features/auth/types'
import { useState } from 'react'
import SignInCard from './sign-in-card'
import SignUpCard from './sign-up-card'

const AuthScreen = () => {
	const [state, setState] = useState<SignInFlow>('signIn')

	return (
		<div className='h-full flex items-center justify-center bg-[#5c3d58]'>
			<div className='md:h-auto md:w-[420px]'>
				{state === 'signIn' ? <SignInCard /> : <SignUpCard />}
			</div>
		</div>
	)
}

export default AuthScreen
