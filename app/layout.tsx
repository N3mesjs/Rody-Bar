import './global.css'

import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Rody Bar Caffe',
  description: 'Rody Bar Caffe, sito web ufficiale del bar di Rodica, Alex e Ana',
}

export default function RootLayout( { children }: { children: React.ReactNode } ) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}