import { useRef, useState } from "react"
import { TiLocationArrow } from "react-icons/ti"

type BentoTiltProps = { children: React.ReactNode, className?: string }

const BentoTilt: React.FC<BentoTiltProps> = ({ children, className = '' }) => {
  const [transformStyle, setTransformStyle] = useState('')

  const itemRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!itemRef.current) return

    const { left, top, width, height } = itemRef.current.getBoundingClientRect()

    const relativeX = (e.clientX - left) / width
    const relativeY = (e.clientY - top) / height

    const tiltX = (relativeY - 0.5) * 5
    const tiltY = (relativeX - 0.5) * -5

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.98, .98, .98)`

    setTransformStyle(newTransform)
  }

  const handleMouseLeave = () => {
    setTransformStyle('')
  }

  return (
    <div className={className} ref={itemRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{ transform: transformStyle }}>
      {children}
    </div>
  )
}

type BentoCardProps = {
  src: string
  title: React.ReactNode
  description?: string
}

const BentoCard = ({ src, title, description }: BentoCardProps) => {
  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 mx-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>
      </div>
    </div>
  )
}

const Features = () => {
  return (
    <section className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular-web text-lg text-blue-50">Na camada definitiva do Metagame.</p>
          <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">"Mergulhe em um universo vivo e em constante evolução, onde uma diversidade vibrante de produtos se entrelaça, criando uma experiência interconectada que transforma o seu mundo."</p>
        </div>

        <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh] ">
          <BentoCard
            src='videos/feature-1.mp4'
            title={<>radia<b>n</b>te</>}
            description='Um aplicativo metagame multiplataforma que transforma suas atividades em jogos Web2 e Web3 em uma jornada emocionante e cheia de recompensas.'
          />
        </BentoTilt>

        <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
            <BentoCard
              src='videos/feature-2.mp4'
              title={<>zig<b>m</b>a</>}
              description="Uma plataforma de criação de NFTs que permite que você transforme suas experiências em arte digital e as compartilhe com o mundo."
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
            <BentoCard
              src='videos/feature-3.mp4'
              title={<>n<b>e</b>xus</>}
              description='Uma comunidade épica de criadores e colecionadores, unindo forças para compartilhar, aprender e colaborar em projetos que combinam arte, tecnologia e a paixão pelo universo gamer.'
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
            <BentoCard
              src='videos/feature-4.mp4'
              title={<>az<b>u</b>l</>}
              description='Um agente de IA multimundo que turboalimenta sua jogabilidade, tornando cada partida mais divertida e recompensadora.'
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_2">
            <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
              <h1 className="bento-title special-font max-w-64 text-black">M<b>a</b>is <b>e</b>m breve<b>!</b></h1>

              <TiLocationArrow className="m-5 scale-[5] self-end" />
            </div>
          </BentoTilt>

          <BentoTilt className="bento-tilt_2">
            <video
              src="videos/feature-5.mp4"
              loop
              muted
              autoPlay
              className="size-full object-cover object-center"
            />
          </BentoTilt>
        </div>

      </div>
    </section>
  )
}

export default Features