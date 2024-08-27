'use client'

import CreateWorkspaceModal from '@/features/workspaces/components/create-workspace-modal'
import { useState } from 'react'

const ModalProvider = () => {
	const [] = useState()

	return (
		<>
			<CreateWorkspaceModal />
		</>
	)
}

export default ModalProvider
