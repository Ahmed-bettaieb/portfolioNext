import Image from "next/image";

export default function HeroSection() {
  return (
    <section className=" min-h-screen flex items-center">
      <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-12 py-12">
        
        {/* Text Content */}
        <div className="flex-1 flex flex-col items-start text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            I am Ahmed Bettaieb
          </h1>
          <h2 className="text-2xl md:text-4xl text-pink-500 mt-4 font-semibold">
            Software Developer
          </h2>
          <p className="mt-6 text-gray-300 text-base md:text-lg">
            Passionate about building web applications, solving problems, and continuously learning new technologies.
          </p>
          <a
            href="/Ahmed_Bettaieb_CV.pdf" 
            download
            className="mt-8 inline-block bg-pink-500 hover:bg-pink-400 text-white font-semibold py-3 px-6 rounded-lg transition"
          >
            Download CV
          </a>
        </div>

       
        <div className="flex-1 flex justify-center">
        <Image
            src="/git.jpg" 
            alt="Hero Image"
            width={400}
            height={400}
            className=" rounded-full max-w-xs md:max-w-sm m-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}
