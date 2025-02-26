import {atom, selector} from 'recoil';

export const networkAtom = atom({
    key: 'networkAtom',
    default: 102
}); 

export const jobsAtom = atom({
    key: 'jobsAtom',
    default: 0
});

export const messagesAtom = atom({
    key: 'messagesAtom',
    default: 2
});

export const notificationsAtom = atom({
    key: 'notificationsAtom',
    default: 0
});

export const postsAtom = atom({
    key: 'postsAtom',
    default: [
        {
            title: "Post 1",
            description: "Description 1"
        },
        {
            title: "Post 2",
            description: "Description 2"
        },
        {
            title: "Post 3",
            description: "Description 3"
        }
    ]
});

export const meSelector = selector({
    key: 'meSelector',
    get: ({get}) => {
        const network = get(networkAtom);
        const jobs = get(jobsAtom);
        const messages = get(messagesAtom);
        const notifications = get(notificationsAtom);

        return parseInt(network)+parseInt(jobs)+parseInt(messages)+parseInt(notifications);
    }
});