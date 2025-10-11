'use client'
// Remember you must use an AuthProvider for 
// client components to useSession
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'



export default function Home() {
  return (
    <main>
      <h1 className="text-2xl font-bold text-red-500">Test</h1>
    </main>
  );
}