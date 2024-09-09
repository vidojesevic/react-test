import { Alert } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';

const open = {
    title: "Welcome pizza lover!",
    message: "We are open, come on in!",
    icon: <IconHeart size={16} />
}

const close = {
    title: "Sorry dear pizza lover!",
    message: "We are closed! Working hours: ",
    icon: <IconHeart size={16} />
}

export const AlertWelcome = () => {
    const current = new Date().getHours();
    const openHours = 10;
    const closeHours = 12;

    return (
        current > openHours && current < closeHours
            ? <Alert variant="light" className="bottom-right-alert border border-black border-radius-8 bg-blue-200 rounded rounded-8 p-4" color="blue" title={open.title} icon={open.icon}>
                {open.message}
            </Alert>
            : <Alert variant="light" color="blue" title={close.title} className="bottom-right-alert border border-black border-radius-8 bg-blue-200 rounded rounded-8 p-4" icon={close.icon}>
                {close.message} {openHours} - {closeHours}
            </Alert>

    )
}
