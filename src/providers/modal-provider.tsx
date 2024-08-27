'use client'

import CreateWorkspaceModal from '@/features/workspaces/components/create-workspace-modal'
import { useEffect, useState } from 'react'

const ModalProvider = () => {
	const [mounted, setMounted] = useState(false)

	useEffect(() => setMounted(true), [setMounted])

	if (!mounted) return

	return (
		<>
			<CreateWorkspaceModal />
		</>
	)
}

export default ModalProvider
