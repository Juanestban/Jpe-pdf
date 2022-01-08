import {
  AnimationControls,
  TargetAndTransition,
  VariantLabels,
  Variants,
} from 'framer-motion';

type FramerMotionAnimation =
  | boolean
  | AnimationControls
  | TargetAndTransition
  | VariantLabels
  | undefined;

type FramerMotionVariant = Variants;

export type { FramerMotionAnimation, FramerMotionVariant };
