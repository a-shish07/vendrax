function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })
    })

    return () => cancelAnimationFrame(frame)
  }, [pathname])

  return null
}