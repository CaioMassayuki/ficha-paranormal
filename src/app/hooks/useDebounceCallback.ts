import { useEffect, useRef, useMemo } from "react";

export function useDebounceCallback<A extends any[]>(callback: (...args: A) => void, milliSeconds: number){
    const argsRef = useRef<A>()
    const timeout = useRef<ReturnType<typeof setTimeout>>()

    function cleanup() {
        if(timeout.current){
            clearTimeout(timeout.current)
        }
    }

    useEffect(() => cleanup, [])

    return function debouncedCallback(...args: A) {
        argsRef.current = args
        cleanup()
        timeout.current = setTimeout(() => {
            if(argsRef.current){
                callback(...argsRef.current)
            }
        }, milliSeconds)
    }
}