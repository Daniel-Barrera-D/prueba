import { useEffect } from "react"

const useSEO = ({ title }) => {
    useEffect(() => {
        document.title = title;
    }, [title]);
}

export default useSEO;