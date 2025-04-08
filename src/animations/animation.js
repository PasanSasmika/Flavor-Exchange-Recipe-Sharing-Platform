import { motion } from 'framer-motion';

// Page transition
export const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 }
};

export const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5
};

// Staggered children animation
export const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

// Specific component animations
export const heroVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut'
    }
  }
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
};

export const scaleUp = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'backOut'
    }
  }
};

export const buttonHover = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      yoyo: Infinity
    }
  }
};

export const socialHover = {
  hover: {
    scale: 1.2,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 10
    }
  }
};