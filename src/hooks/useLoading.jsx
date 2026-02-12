import { useState } from "react"
import LoadingScreen from "./LoadingScreen";

const useLoading = () => {
    const [isLoading, setIsLoading] = useState(false)

    const loading = {
        show: () => setIsLoading(true),
        hide: () => setIsLoading(false),
        screen: <LoadingScreen />
    }

    return { isLoading, loading }
}

export default useLoading;