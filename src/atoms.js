import {atom, atomFamily, selector} from 'recoil';
import axios from 'axios'


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
    default: selector({
        key: 'postsAtom/Default',
        get: async () => {
            const res = await axios("https://jsonplaceholder.typicode.com/posts");
            return res.data;
        }
    })
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

export const atomfamily1 = atomFamily({
    key: 'atomfamily',
    default: (id)=>{
        return selector({
            key: 'atomfamily/Default',
            get: async () => {
                const res = await axios(`https://jsonplaceholder.typicode.com/posts/${id}`);
                return res.data;
    }
})
}
})