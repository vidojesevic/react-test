import { Alert } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';

const open = {
    title: "Welcome!",
    message: "We are open, come on in!",
    icon: <IconHeart size={16} />
}

const close = {
    title: "Sorry",
    message: "We are closed, come back soon!",
    icon: <IconHeart size={16} />
}

export const AlertWelcome = () => {
    const current = new Date().getHours();

    return (
        current > 10 && current < 22
            ? <Alert variant="light" className="bottom-right-alert border border-black border-radius-8 bg-blue-200 rounded rounded-8 p-4" color="blue" title={open.title} icon={open.icon}>
                {open.message}
            </Alert>
            : <Alert variant="light" color="blue" title={close.title} className="bottom-right-alert" icon={close.icon}>
                {close.message}
            </Alert>

    )
}
