import { useEffect } from "react"

export default function useTitle(title: string): void {
    useEffect(() => {
        document.title = title
    }, [ title ])
}