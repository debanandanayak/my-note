

export default function getCurrentTime(){

    const date = new Date()
    const time = date.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
    const today = `${date.toLocaleString('en-IN', { day: '2-digit', month: '2-digit', year: 'numeric', })}  ${time}`
    return today
}


export const instructions = [
    {
        text: 'Write someting here memoryless persons...! ', date: 'Introduction'
    },
    {
        text: 'You wanna know a secret...! We do not store your data 🤭.', date: 'About Security...'
    },
    {
        text: 'Feel free to give your valueable feedback and mostly we will ignore you 😂. ', date: 'Thanks and Regards, \n Deba'
    },
    {
        text: 'Start removing and keep adding ❤️. ', date: 'Delete here ----->'
    }
]