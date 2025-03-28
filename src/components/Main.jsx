import React, { useCallback, useMemo } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; 

const Main = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback((container) => {
        console.log("Particles Loaded:", container);
    }, []);

    const particlesOptions = useMemo(() => ({
        background: {
            color: {
                value: "#ffffff", // Fixed invalid color
            },
        },
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: {
                    enable: false,
                    mode: "push",
                },
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
                resize: true,
            },
            modes: {
                push: {
                    quantity: 4,
                },
                repulse: {
                    distance: 200,
                    duration: 0.4,
                },
            },
        },
        particles: {
            color: { value: "#2abd19" },
            links: {
                color: "#2abd19",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
            },
            move: {
                enable: true,
                speed: 4,
                direction: "none",
                outModes: { default: "bounce" },
            },
            number: {
                density: { enable: true, area: 600 },
                value: 80,
            },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 5 } },
        },
        detectRetina: true,
    }), []);

    return (
        <div className="max-h-screen">
            <Particles id="tsparticles" init={particlesInit} loaded={particlesLoaded} options={particlesOptions} />
        </div>
    );
};

export default Main;
