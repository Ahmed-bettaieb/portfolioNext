import Image from "next/image";
 

export default function AboutPage() {
  return (
    <section className=" dark:bg-gray-900 min-h-screen flex items-center py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 flex flex-col md:flex-row items-center gap-8">
          
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <Image 
              src="/profil.jpg" 
              alt="Ahmed Bettaieb" 
              width={200} 
              height={200} 
              className="rounded-full object-cover"
            />
          </div>

          {/* About Info */}
          <div>
            <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              About Me
            </h1>

            <div className="space-y-4">
              {/* Name */}
              <div>
                <h2 className="text-xl font-semibold text-pink-500">Name</h2>
                <p className="text-gray-700 dark:text-gray-300">Ahmed Bettaieb</p>
              </div>

              {/* Email */}
              <div>
                <h2 className="text-xl font-semibold text-pink-500">Email</h2>
                <a 
                  href="mailto:ahmed.bettaieb@example.com" 
                  className="text-gray-700 dark:text-gray-300 hover:text-pink-500 transition"
                >
                  ahmed.bettaieb@example.com
                </a>
              </div>

              {/* Address */}
              <div>
                <h2 className="text-xl font-semibold text-pink-500">Address</h2>
                <p className="text-gray-700 dark:text-gray-300">Tunis, Tunisia</p>
              </div>

              {/* Description */}
              <div>
                <h2 className="text-xl font-semibold text-pink-500">Description</h2>
                <p className="text-gray-700 dark:text-gray-300">
                  I am a passionate software developer specialized in building modern web applications.
                  I love solving real-world problems through clean and efficient code.
                  I'm constantly learning new technologies and refining my skills to create impactful digital experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
