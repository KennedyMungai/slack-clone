'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { useCurrentUser } from '@/features/auth/hooks/use-current-user'
import { Loader2Icon } from 'lucide-react'

const UserButton = () => {
	const { data, isLoading } = useCurrentUser()

	if (isLoading) {
		return (
			<Loader2Icon className='size-10 animate-spin text-muted-foreground' />
		)
	}

	if (!data) return null

	const { image, name, email } = data

	return (
		<DropdownMenu modal={false}>
			<DropdownMenuTrigger className='outline-none relative '>
				<Avatar className='size-10 hover:opacity-75 transition'>
					<AvatarImage src={image} alt={name} />
					<AvatarFallback>
						{name!.charAt(0).toUpperCase()}
					</AvatarFallback>
				</Avatar>
			</DropdownMenuTrigger>
			<DropdownMenuContent align='center' side='right' className='w-60'>
				<DropdownMenuItem></DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export default UserButton
