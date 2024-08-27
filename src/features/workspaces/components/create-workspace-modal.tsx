import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle
} from '@/components/ui/dialog'
import { useCreateWorkspaceModal } from '@/features/workspaces/store/use-create-workspace-modal'

type Props = {}

const CreateWorkspaceModal = () => {
	const [open, setOpen] = useCreateWorkspaceModal()

	const handleClose = () => {
		setOpen(false)

		// TODO: Add the logic to clear the dialog form
	}

	return (
		<Dialog open={open} onOpenChange={handleClose}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Add a workspace</DialogTitle>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	)
}

export default CreateWorkspaceModal
