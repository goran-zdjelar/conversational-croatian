import { useEffect, useState } from "react";
import "./App.css";
import { Slide, Transition } from "./components/slide-show.component";

import Intro from "./lessons/introduction/introduction-1.mdx";

function App() {
    const [step, setStep] = useState(0);

    useEffect(() => {
        function handleKeyPress(e: KeyboardEvent) {
            e.preventDefault();
            if (e.key === "ArrowRight") {
                if (step < 1) {
                    setStep(step + 1);
                }
            } else if (e.key === "ArrowLeft") {
                if (step > 0) {
                    setStep(step - 1);
                }
            }
        }
        window.addEventListener("keyup", handleKeyPress);

        return () => {
            window.removeEventListener("keyup", handleKeyPress);
        };
    }, [step]);

    return (
        <div className="App h-full">
            <div className="bg-blue-gray-1000 text-white h-full p-10">
                <div className="background-flag md:background-flag-medium 2xl:background-flag-big" />
                <div className="h-full flex flex-col justify-center items-center">
                    {step === 0 && (
                        <Slide transition={Transition.FADE_IN} hideArrows={true}>
                            <Intro />
                        </Slide>
                    )}
                    {step === 1 && (
                        <Slide>
                            <Intro />
                        </Slide>
                    )}
                </div>
            </div>
        </div>
    );
}

export default App;
