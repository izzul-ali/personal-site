import Header from '@/components/home/header'
import AboutContact from '@/components/home/about-contact'
import Projects from '@/components/home/projects'
import Footer from '@/components/home/footer'

export default function Index() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-r from-indigo-400/10 to-cyan-400/10">
      <div className="max-w-2xl sm:mx-auto py-5 px-7 font-primary text-gray-800 bg-inherit">
        <Header />
        <AboutContact />
        <Projects />
        <Footer />
      </div>
    </main>
  )
}
