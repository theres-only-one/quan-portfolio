import { motion, stagger } from "motion/react"


interface AnimatedParagraphProps extends React.HTMLProps<HTMLDivElement> {
  paragraph: string;
}


/* Paragraphs cannot be animated word by word or line by line, so split
   paragraphs into children containing 1 word each. */
const paragraphAnimation = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      delayChildren: stagger(0.01), // Stagger children by 0.01 seconds
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
}

// Children of paragraphs containing 1 word each
const wordAnimation = {
  visible: { clipPath: "inset(0)" },
  hidden: { clipPath: "inset(100% 0 0)" },
}


export default function AnimatedParagraph(props: AnimatedParagraphProps) {
  /* Split paragraph using RegExp delimiter. \s represents whitespace, so this
     RegExp matches all tokens that are hyphens or whitespace. Enclosing in a
     capturing group () tells split() to keep the delimiters in the array. */
  let words: string[] = props.paragraph.split(/([\s-])/);

  /* split() adds delimiters to the array as separate array elements, but we
     want them to be merged with the words for consistent animation speed. */
  for (let i = 0; i < words.length - 1; i += 2)
    words[i] += words[i + 1];

  // Filter to remove delimiter elements after the merging loop.
  words = words.filter((word: string) => word != ' ' && word != '-');

  return (
    <motion.div className={props.className}
      initial="hidden"
      whileInView="visible"
      variants={ paragraphAnimation }
      viewport={{ once: true }}
    >
      {
        words.map((word: string) =>
          <motion.span variants={wordAnimation}>{word}</motion.span>
        )
      }
    </motion.div>
  );
}