import ConvexClientProvider from '@/providers/convex-client-provider'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ConvexAuthNextjsServerProvider } from '@convex-dev/auth/nextjs/server'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Slack Clone',
	description: 'A fullstack slack clone in NextJS and Convex'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<ConvexAuthNextjsServerProvider>
			<html lang='en'>
				<body className={inter.className}>
					<ConvexClientProvider>{children}</ConvexClientProvider>
				</body>
			</html>
		</ConvexAuthNextjsServerProvider>
	)
}
