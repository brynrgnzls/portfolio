import ParticleComp, {
  initParticlesEngine,
  IParticlesProps,
} from "@tsparticles/react";
import { memo, useEffect, useMemo } from "react";
import { loadSlim } from "@tsparticles/slim";

function Particles() {
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    });
  }, []);

  const options = useMemo<IParticlesProps["options"]>(
    () => ({
      background: {
        color: {
          value: "#101010",
        },
      },
      fullScreen: {
        enable: true,
      },
      fpsLimit: 60,
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
          distance: 125,
          enable: true,
          opacity: 0.5,
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
          value: { min: 1, max: 4 },
        },
      },

      detectRetina: true,
    }),
    [],
  );

  return (
    <ParticleComp
      className="absolute -z-50 w-full h-full"
      id="particles"
      options={options}
    />
  );
}

export default memo(Particles);
