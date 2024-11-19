// about.tsx
import Image from "next/image";
import photo from "@/public/sattar_photo.jpg";

export default function About() {
  return (
    <section id="about" className="py-12 bg-background">
      <div className="container mx-auto p-6">
        {/* Heading */}
        <h2 className="my-gradient gradient-border nav-border-b nav-border-hover text-2xl font-semibold text-slate-300 mb-4 py-2">
          <span className="font-bold mr-2">About Me</span>
        </h2>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Text Content */}
          <div className="leading-relaxed text-slate-400 lg:w-2/3">
            <p>
              Hello! My name is Abdus Sattar, and I enjoy creating things that
              live on the internet. My interest in web development started back
              in 2012 when I began experimenting with HTML and CSS.
            </p>
            <p>
              Since then, I’ve had the privilege of working in diverse roles
              including a coding bootcamp at Microverse, where I gained valuable
              experience building full-stack applications and collaborating in
              remote teams. My primary focus now is creating efficient, dynamic,
              and accessible web applications.
            </p>
            <p>Here are a few technologies I’ve been working with recently:</p>

            {/* Skills List */}
            <ul className="list-disc list-inside mt-4 grid grid-cols-2 gap-x-4">
              <li>JavaScript (ES6+)</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>Next.js</li>
              <li>Node.js</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>

          {/* Profile Image with Hover and Frame Effect */}
          <div className="relative group">
            {/* Fixed Frame */}
            <div
              className="absolute -bottom-4 -right-4 w-60 h-60 rounded-lg border-2 border-blue-600"
              aria-hidden="true"
            ></div>

            {/* Profile Image with Hover Effect */}
            <div className="w-60 h-60 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 ease-in-out">
              <Image
                src={photo}
                alt="Abdus Sattar"
                fill
                placeholder="blur"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="rounded-lg transform transition-all duration-300 ease-in-out group-hover:translate-x-[-5px] group-hover:translate-y-[-5px] group-hover:scale-105"
              />
              {/* Color Overlay */}
              <div className="absolute inset-0 bg-blue-500 opacity-50 group-hover:opacity-0 transition-opacity duration-300 ease-in-out"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
