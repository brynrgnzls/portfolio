import ParticleComp, {
  initParticlesEngine,
  IParticlesProps,
} from "@tsparticles/react";
import { Children, memo, useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";
import { Container } from "@tsparticles/engine";

function Particles() {
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    });
  }, []);

  const particlesLoaded = async (container?: Container) => {
    console.log("Particles loaded", container);
  };

  const options = useMemo<IParticlesProps["options"]>(
    () => ({
      background: {
        color: {
          value: "#101010",
        },
      },
      fullScreen: {
        enable: false,
        zIndex: -50,
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "repulse",
          },
          onHover: {
            enable: true,
            mode: "grab",
          },
        },
        modes: {
          grab: {
            distance: 150,
          },
          repluse: {
            distance: 75,
          },
        },
      },
      particles: {
        color: {
          value: "#FFFFFF",
        },
        links: {
          color: "#FFFFFF",
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 250,
        },
        opacity: {
          value: 1.0,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 2, max: 4 },
        },
      },

      detectRetina: true,
    }),
    [],
  );

  return (
    <ParticleComp
      className="absolute -z-50 h-screen w-screen"
      id="particles"
      particlesLoaded={particlesLoaded}
      options={options}
    />
  );
}

export default memo(Particles);
