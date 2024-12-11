import gsap from "gsap"
import { useGSAP } from "@gsap/react"

import { ScrollTrigger } from "gsap/all"
import AnimatedTitle from "./AnimatedTitle"

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: '#clip',
        start: 'center center',
        end: '+=800 center',
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      }
    })

    clipAnimation.to('.mask-clip-path', {
      width: '100vw',
      height: '100vh',
      borderRadius: 0,
    })
  })

  return (
    <div id='about' className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <h2 className="font-general text-sm uppercase md:text-[10px]">Bem vindo ao Zentry</h2>

        <AnimatedTitle />

        <div className="about-subtext">
          <p>Prepare-se para a jornada: o nascimento de um MMORPG épico que redefine o jogo dos jogos!</p>

          <p>Zentry: conectando jogadores de todos os mundos, jogos e plataformas em uma única experiência épica.</p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img src="img/about.webp" alt="Background" className="absolute left-0 top-0 size-full object-cover" />
        </div>
      </div>
    </div>
  )
}

export default About