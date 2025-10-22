import Script from 'next/script';
import LoadingScreen from '@/components/Common/loader';
import generateStylesheetObject from '@/Common/generateStylesheetsObject';
import Cursor from '@/components/Common/cusor';
import ProgressScroll from '@/components/Common/ProgressScroll';
import Lines from '@/components/Common/Lines';
import ContactUs from '@/components/dark/contact/ContactUs';
import Info from '@/components/dark/contact/info';
import Footer from '@/components/dark/home/footer';
import NavTop from '@/components/dark/home/nav-top';
import Navbar from '@/components/dark/home/navbar';
import Portfolio from '@/components/dark/home/portfolio';
import Profile from '@/components/dark/home/profile';
import Services from '@/components/dark/home/services';
import Skills from '@/components/dark/home/skills';
export const metadata = {
  title: 'Manish Kashyap | Full Stack Developer',
  icons: {
    icon: '/assets/imgs/favicon.ico',
    shortcut: '/assets/imgs/favicon.ico',
    other: generateStylesheetObject([
      '/assets/css/plugins.css',
      '/assets/css/style.css',
    ]),
  },
};
export default function Home() {
  return (
    <div>
      <Cursor />
      <ContactUs />
      <LoadingScreen />
      <ProgressScroll />

      <div>
        <NavTop />
        <main className="container">
          <Profile />
          <Navbar />
          <section className="in-box">
            <Services />
            <Skills />
            <Portfolio />
            <Info />
          </section>
        </main>
        <Footer />
      </div>
      <Script
        src="/assets/js/jquery-3.6.0.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/assets/js/jquery-migrate-3.4.0.min.js"
        strategy="beforeInteractive"
      />

      <Script src="/assets/js/plugins.js" strategy="beforeInteractive" />
      <Script src="/assets/js/scripts.js" strategy="beforeInteractive" />
      <Script src="/assets/js/three.min.js" strategy="lazyOnload" />
    </div>
  );
}
