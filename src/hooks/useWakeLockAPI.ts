type WakeLockSentinelLike = {
  release: () => Promise<void>
}

type WakeLockLike = {
  request?: (type: "screen") => Promise<WakeLockSentinelLike | undefined>
}

export function useWakeLockAPI() {
  const wakeLock =
    typeof navigator !== "undefined"
      ? (navigator as Navigator & { wakeLock?: WakeLockLike }).wakeLock
      : undefined

  if (!wakeLock || typeof wakeLock.request !== "function") {
    return
  }

  const requestWakeLockMethod = wakeLock.request
  let wakeLockSentinel: WakeLockSentinelLike | null = null
  let disposed = false

  async function requestWakeLock() {
    if (disposed || document.visibilityState !== "visible") {
      return
    }

    try {
      const sentinel = await requestWakeLockMethod.call(wakeLock, "screen")

      if (!sentinel) {
        return
      }

      if (disposed) {
        await sentinel.release()
        return
      }

      wakeLockSentinel = sentinel
    } catch {}
  }

  function handleVisibilityChange() {
    if (document.visibilityState === "visible") {
      void requestWakeLock()
    } else {
      wakeLockSentinel = null
    }
  }

  document.addEventListener("visibilitychange", handleVisibilityChange)
  void requestWakeLock()

  return () => {
    disposed = true
    document.removeEventListener("visibilitychange", handleVisibilityChange)
    if (wakeLockSentinel) {
      void wakeLockSentinel.release().catch(() => {})
    }
  }
}
