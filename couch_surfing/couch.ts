interface reviewers {
    id: number
    name: string,
    location: string,
}


const reviewsList: {id: number; name: string; location?: string; comment?: string}[] = [
    {
        id:100,
        name: "Els",
        location: "London",
        comment: "Just crazy!"
    },
    {
        id:101,
        name: "Louis",
        location: "Michigan"
    },
    {
        id:102,
        name: "Luke",
        comment: "Yooo laa!"
    }
]
const elementLength = document.querySelector("#getreview") as HTMLElement

function countReviews(num: number): void{
    elementLength.innerHTML = num.toString()
}

countReviews(reviewsList.length)