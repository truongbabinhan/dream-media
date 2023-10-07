import { useScramble } from "use-scramble";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
interface TextScrambleProps {
  text: any;
  className?: any;
  styles?: any;
}
export const TextScramble = ({
  text,
  className,
  styles,
}: TextScrambleProps) => {
  const { ref: refInView, inView } = useInView({
    threshold: 0,
  });
  const { ref, replay } = useScramble({
    text: text,
    speed: 3,
    tick: 1,
    step: 1,
    scramble: 50,
    seed: 1,
    range: [42, 42],
    overdrive: false,
    overflow: false,
  });
  useEffect(() => {
    replay();
  }, [inView]);
  return (
    <div ref={refInView} className={className || ""}>
      <p ref={ref} style={styles} />
    </div>
  );
};
