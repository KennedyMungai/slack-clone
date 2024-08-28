'use client'

import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { useCreateWorkspace } from '@/features/workspaces/api/use-create-workspace'
import { useCreateWorkspaceModal } from '@/features/workspaces/store/use-create-workspace-modal'
import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'

const CreateWorkspaceModal = () => {
	const [open, setOpen] = useCreateWorkspaceModal()

	const [name, setName] = useState('')

	const router = useRouter()

	const { mutate, isError, isPending, isSuccess, data, error } =
		useCreateWorkspace()

	const handleClose = () => {
		setOpen(false)

		// TODO: Add the logic to clear the dialog form
	}

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		mutate(
			{ name },
			{
				onSuccess: (data) => console.log(data),
				onError: (error) => console.log(error.message)
			}
		)
	}

	return (
		<Dialog open={open} onOpenChange={handleClose}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Add a workspace</DialogTitle>
				</DialogHeader>
				<form className='space-y-4'>
					<Input
						disabled={isPending}
						value={name}
						onChange={(e) => setName(e.target.value)}
						required
						autoFocus
						minLength={3}
						placeholder="Workspace name e.g. 'My Workspace'"
					/>
					<div className='flex justify-end'>
						<Button disabled={isPending}>Create</Button>
					</div>
				</form>
			</DialogContent>
		</Dialog>
	)
}

export default CreateWorkspaceModal
