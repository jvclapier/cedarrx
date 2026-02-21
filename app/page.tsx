import DynamicSection from '@/components/DynamicSection'
import DevToolbar from '@/components/DevToolbar'
import Navbar from '@/components/Navbar'
import ShippingCoverage from '@/components/ShippingCoverage'

export default function Home() {
  return (
    <main className="min-h-screen" suppressHydrationWarning>
      <Navbar />
      <DynamicSection section="hero" />
      <DynamicSection section="services" />
      <DynamicSection section="how-it-works" />
      <DynamicSection section="why-cedarrx" />
      <ShippingCoverage />
      <DynamicSection section="testimonials" />
      <DynamicSection section="footer" />
      <DevToolbar />
    </main>
  )
}
