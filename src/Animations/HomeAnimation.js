export const TitleAnim = {
    hidden: { y: 200 },
    show: {
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  export const C1Anim = {
    hidden: { x: 300 },
    show: {
      x: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };
  export const C2Anim = {
    hidden: { x: -300 },
    show: {
      x: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };
  export const C3Anim = {
    hidden: { y: -300 },
    show: {
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };
  export const photoAnim = {
    hidden: { scale: 1.5, opacity: 0 },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        ease: "easeOut",
        duration: 0.75,
      },
    },
  };