import { createFileRoute } from '@tanstack/react-router'
import { Hero } from '@/components/sections/Hero'
import { AuthorityStrip } from '@/components/sections/AuthorityStrip'
import { Services } from '@/components/sections/Services'
import { Process } from '@/components/sections/Process'
import { WhyUs } from '@/components/sections/WhyUs'
import { Firm } from '@/components/sections/Firm'
import { GroupTeaser } from '@/components/sections/GroupTeaser'
import { Contact } from '@/components/sections/Contact'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <>
      <Hero />
      <AuthorityStrip />
      <Services />
      <Process />
      <WhyUs />
      <Firm />
      <GroupTeaser />
      <Contact />
    </>
  )
}
