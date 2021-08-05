

export default function getCurrentTime(){

    const date = new Date()
    const time = date.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
    const today = `${date.toLocaleString('en-IN', { day: '2-digit', month: '2-digit', year: 'numeric', })}  ${time}`
    return today
}


export const instructions = [
    {
        text: 'You can access it offline now ', date: 'New Update'
    },
    
]