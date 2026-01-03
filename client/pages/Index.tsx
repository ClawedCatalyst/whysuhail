import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-8 md:px-16 lg:px-32 pt-16 md:pt-24 pb-32 md:pb-48">
        {/* Header Section */}
        <header className="mb-8 md:mb-12">
          <h1 className="text-2xl font-semibold text-[#111111] mb-1">
            Suhail
          </h1>
          <p className="text-sm text-[#777777]">Updated 2025</p>
        </header>

        {/* Bio Section */}
        <section className="space-y-3 md:space-y-4 mb-8 md:mb-12">
          <p className="text-sm leading-relaxed text-[#111111]">
            I was born in Lucknow, India.
          </p>

          <p className="text-sm leading-relaxed text-[#111111]">
            I work as a software engineer at{" "}
            <a
              href="https://benefi.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] hover:underline"
            >
              Benefi.org
            </a>
            , a US-based company.
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
            You can reach me at <a href="mailto:benji@benji.org" className="text-[#2563EB] hover:underline">me@whysuhail.xyz</a> or <a href="https://x.com/suhaillahmadd" target="_blank" rel="noopener noreferrer" className="text-[#2563EB] hover:underline">@suhaillahmadd</a>.
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
