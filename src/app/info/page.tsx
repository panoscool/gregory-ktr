import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center flex-wrap gap-9">
        <div className="max-w-[320px]">
          <h1 className="pb-4">About me</h1>

          <p>
            Hello, I&rsquo;m Gregory Kotrotsios, a professional freelance photographer specializing
            in fashion photography. Currently based in Athens, Greece, I&rsquo;ve had the privilege
            of working with various brands in Greece and undertaking photography projects worldwide.
            I&apos;ve conducted photoshoot sessions, created video content, and collaborated with
            influence&apos;s in cities such as Paris, Milan, Copenhagen, London, and Dubai.
          </p>

          <div className="flex flex-col mt-9">
            <p>CONTACT</p>

            <a href="mailto:greg.kotrotsios@gmail.com">greg.kotrotsios@gmail.com</a>
            <span>
              Instagram:{" "}
              <a href="https://www.instagram.com/gregorykotrotsios" target="_blank">
                @gregorykotrotsios
              </a>
            </span>
          </div>
        </div>

        <div>
          <Image
            src="/gregory.jpeg"
            alt="Gregory Kotrotsios"
            loading="lazy"
            style={{
              width: "70%",
              height: "auto",
            }}
            width={500}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}
