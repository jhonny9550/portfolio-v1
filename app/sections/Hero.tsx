import Button from '@/app/components/Button';
import Link from 'next/link';

const Hero = () => (
  <section
    className="section-container xl:px-[124px] xl:py-28 xl:gap-4 motion-safe:opacity-0 motion-safe:animate-pop-in motion-safe:animation-delay-[1800ms]"
    data-testid="hero-section">
    <div className="text-accent flex items-center gap-2 group">
      <pre>Hello world!</pre>
      <span className="group-hover:motion-safe:animate-wobble">👋</span>
      <pre>My name is</pre>
    </div>
    <h1 className="text-white hero-text leading-tight">
      Jhonny Martinez.
      <span className="block text-text">I craft software solutions.</span>
    </h1>
    <p className="sm:max-w-[450px] xl:max-w-[500px]">
      As a Software Engineer, I&apos;m passionate about creating unique products and digital
      experiences that solve real-world problems. I&apos;m starting my journey at{' '}
      <Link
        href="https://sitemate.com/au/"
        rel="noreferrer noopener"
        target="_blank"
        className="body-copy text-primary hover:underline">
        Sitemate
      </Link>{' '}
      as a Fullstack Engineer, building a SaaS platform with instant & affordable no-code
      integrations and automation.
    </p>
    <Button className="mt-[46px]" href={process.env.resumeUrl || ''} target="_blank" download>
      Download my resume
    </Button>
  </section>
);

export default Hero;
