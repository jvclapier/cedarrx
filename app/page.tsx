import DynamicSection from '@/components/DynamicSection'
import DevToolbar from '@/components/DevToolbar'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <main className="min-h-screen" suppressHydrationWarning>
      <Navbar />
      <DynamicSection section="hero" />
      <DynamicSection section="services" />
      <DynamicSection section="how-it-works" />
      <DynamicSection section="why-cedarrx" />
      <DynamicSection section="testimonials" />
      <DynamicSection section="footer" />
      <DevToolbar />
    </main>
  )
}
