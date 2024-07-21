import { useEffect } from "react";
import { useRouter } from "next/router";

function usePreserveScroll() {
  const router = useRouter();

  useEffect(() => {
    const saveScrollPosition = () => {
      window.sessionStorage.setItem(
        "scrollPosition",
        JSON.stringify({ x: window.scrollX, y: window.scrollY })
      );
    };

    const restoreScrollPosition = () => {
      const scrollPosition = JSON.parse(
        window.sessionStorage.getItem("scrollPosition") || '{"x":0,"y":0}'
      );
      window.scrollTo(scrollPosition.x, scrollPosition.y);
    };

    // Save scroll position on route change start
    router.events.on("routeChangeStart", saveScrollPosition);
    // Restore scroll position on route change complete
    router.events.on("routeChangeComplete", restoreScrollPosition);

    // Cleanup event listeners on component unmount
    return () => {
      router.events.off("routeChangeStart", saveScrollPosition);
      router.events.off("routeChangeComplete", restoreScrollPosition);
    };
  }, [router]);
}

export default usePreserveScroll;
