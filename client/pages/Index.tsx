import { Link } from "react-router-dom";
import { Mail, Twitter } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-white relative">

      <div className="max-w-4xl mx-auto px-8 md:px-16 lg:px-32 pt-16 md:pt-24 pb-32 md:pb-48">
        {/* Hero Section */}
        <header className="mb-8 md:mb-10 text-center lg:text-left">
          <h1 className="text-5xl md:text-6xl lg:text-5xl font-semibold text-[#111111] mb-2 md:mb-3 leading-[1.1]">
            Suhail<br />
          </h1>
          <p className="text-lg md:text-xl text-[#777777] max-w-2xl mx-auto lg:mx-0 mb-4 md:mb-5 leading-relaxed">
            Building privacy-preserving financial infrastructure. Creating payment systems that accept crypto and fiat, with scalable APIs.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <a
              href="mailto:me@whysuhail.xyz"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#111111] text-white rounded-lg hover:bg-[#333333] transition-colors text-sm font-medium"
            >
              <Mail className="w-4 h-4" />
              Get in Touch
            </a>
            <a
              href="https://x.com/suhaillahmadd"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white border border-[#EEEEEE] text-[#111111] rounded-lg hover:border-[#DDDDDD] hover:bg-[#FAFAFA] transition-colors text-sm font-medium"
            >
              <Twitter className="w-4 h-4" />
              Follow on X
            </a>
          </div>
        </header>

        {/* Bio Section */}
        <section className="space-y-3 md:space-y-4 mb-8 md:mb-12">
          <p className="text-sm leading-relaxed text-[#111111]">
            I was born in India.
          </p>

          <p className="text-sm leading-relaxed text-[#111111]">
            I work as a software engineer 2 at{" "}
            <a
              href="https://benefi.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] hover:underline"
            >
              Benefi.org
            </a>
            , a US-based company. Got promoted in 6 months after college—guess I didn't break anything too important.
          </p>

          <p className="text-sm leading-relaxed text-[#111111]">
            I am also building a privacy-preserving global credit router called{" "}
            <a
              href="https://blocrate.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] hover:underline"
            >
              Blocrate
            </a>
            , focused on trust, privacy, and access.
          </p>

          <p className="text-sm leading-relaxed text-[#111111]">
            Previously, I've built end-to-end payment systems integrating{" "}
            <a
              href="https://stripe.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] hover:underline"
            >
              Stripe
            </a>{" "}
            and full cryptocurrency transaction flows, including 
            real-time swapping of crypto assets into stablecoins.
          </p>
          
          <p className="text-sm leading-relaxed text-[#111111] mt-4 md:mt-5">
            My experience is primarily in designing and building backend
            systems for payments, financial infrastructure, and scalable APIs.
          </p>

          <p className="text-sm leading-relaxed text-[#111111]">
            You can reach me at <a href="mailto:me@whysuhail.xyz" className="text-[#2563EB] hover:underline">me@whysuhail.xyz</a> or <a href="https://x.com/suhaillahmadd" target="_blank" rel="noopener noreferrer" className="text-[#2563EB] hover:underline">@suhaillahmadd</a>.
          </p>
        </section>

        {/* Divider */}
        <hr className="border-t border-[#EEEEEE] mb-4 md:mb-8" />

        {/* Experience Section */}
        <section className="space-y-4 md:space-y-6">
          {/* BlocRate */}
          {/* <Link
            to="/blog/blocrate"
            className="block group opacity-100 hover:opacity-70 transition-opacity duration-300"
          > */}
          <a
            href="https://blocrate.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block group opacity-100 hover:opacity-70 transition-opacity duration-300"
          >
            <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 md:gap-8">
              <div className="text-sm text-[#999999]">2026 – Present</div>
              <div className="text-sm text-[#111111]">
                Blocrate — Privacy‑Preserving Credit Infrastructure
              </div>
            </div>
          </a>
          {/* </Link> */}

          {/* Benefi */}
          {/* <Link
            to="/blog/benefi"
            className="block group opacity-100 hover:opacity-70 transition-opacity duration-300"
          > */}
          <a
            href="https://benefi.org"
            target="_blank"
            rel="noopener noreferrer"
            className="block group opacity-100 hover:opacity-70 transition-opacity duration-300"
          >
            <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 md:gap-8">
              <div className="text-sm text-[#999999]">2023 – Present</div>
              <div className="text-sm text-[#111111]">
                Benefi
              </div>
            </div>
          </a>
          {/* </Link> */}
        </section>
      </div>
    </div>
  );
}
