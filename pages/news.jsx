
import { Inter } from 'next/font/google'

import AnimalNewsPage from '@/js/components/AnimalsNewsPage'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <AnimalNewsPage/>
  )
}
