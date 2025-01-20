import { availableProjects } from '@/data/available-projects'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20'>
      <h1 className='text-xl font-bold'>Welcome to SERL Showcase.</h1>
      <div className='grid gap-4'>
        {availableProjects.map((p) => (
          <Card key={p.title}>
            <CardHeader>
              <CardTitle>{p.title}</CardTitle>
              <CardDescription>{p.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className='flex flex-col items-center gap-4 sm:flex-row'>
                <Image
                  src='/fallback_image/No_image_available.svg'
                  alt='Project image'
                  width={300}
                  height={300}
                />

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <p>Tags: {p.tags.join(', ')}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
