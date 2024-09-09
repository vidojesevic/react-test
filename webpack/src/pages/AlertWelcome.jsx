import { Alert } from '@mantine/core';
import { IconHeart, IconInfoCircle } from '@tabler/icons-react';

const open = {
    title: "Welcome pizza lover!",
    message: "We are open, come on in!",
    icon: <IconHeart size={16} />
}

const close = {
    title: "Sorry dear pizza lover!",
    message: "We are closed! Working hours: ",
    icon: <IconInfoCircle size={16} />
}

export const AlertWelcome = ({ closeHour, openHour }) => {
    const current = new Date().getHours();
    const isOpen = current > openHour && current < closeHour;

    if (!isOpen) {
        return (
            <Alert variant="light" color="blue" title={close.title} className="bottom-right-alert border border-black border-radius-8 bg-blue-200 rounded rounded-8 p-4" icon={close.icon}>
                {close.message} {openHour} - {closeHour}
            </Alert>
        );
    }

    return (
        <Alert variant="light" className="bottom-right-alert border border-black rounded-2xl bg-blue-200 rounded rounded-8 p-4" color="blue" title={open.title} icon={open.icon}>
            {open.message}
        </Alert>

    )
}
