'use client'

import { ConvexProvider, ConvexReactClient } from 'convex/react'
import { ReactNode } from 'react'

type Props = {
	children: ReactNode
}

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!)

const ConvexClientProvider = ({ children }: Props) => {
	return <ConvexProvider client={convex}>{children}</ConvexProvider>
}

export default ConvexClientProvider
