import React from 'react'
import Logo from '../assets/logo/Logo'
import Link from 'next/link'
import SignUpForm from './SignUpForm'

function SignUpSection() {
  return (
    <section className="flex flex-col gap-5 md:gap-10 px-6 md:px-20 py-10">
      {/* logo */}
      <Logo />

      <section>
        <h2 className="text-xl font-semibold">Create an account</h2>
        <p className="text-sm">
          Already have an accound? <Link href={"/login"} className="text-primary">Login now</Link>
        </p>
      </section>

      <SignUpForm />
    </section>
  )
}

export default SignUpSection