import { Button } from "@material-tailwind/react";
import classNames from "classnames";
import { FaEdit } from "react-icons/fa";
import { Animations } from "./animations";

interface JoinButtonProps {}

export function JoinButton({}: JoinButtonProps) {
    const classes = classNames("bg-blue-gray-50 text-blue-gray-1000 text-2xl hover:shadow-none flex items-center gap-2 mt-10");

    return (
        <div className="absolute">
            <Animations.Cta delay={3}>
                <Button className={classes}>
                    <span>Enrol</span>
                    <FaEdit />
                </Button>
            </Animations.Cta>
        </div>
    );
}

export const Buttons = {
    JoinButton,
};
