import styles from "./DevelopedBy.module.css";

const letters = [
  {
    char: "K",
    color: "#23b1d8",
    delay: "0s",
    width: "12px",
    paddingRight: "2px",
  },
  {
    char: "G",
    color: "#dc5fe2",
    delay: "0.15s",
    width: "13px",
  },
  {
    char: "a",
    color: "#b733f9",
    delay: "0.3s",
    width: "13px",
  },
  {
    char: "u",
    color: "#a0de59",
    delay: "0.45s",
    width: "12px",
  },
  {
    char: "r",
    color: "#83d1ad",
    delay: "0.6s",
    width: "9px",
  },
  {
    char: "a",
    color: "#f7b500",
    delay: "0.75s",
    width: "12px",
  },
  {
    char: "v",
    color: "#ff6b6b",
    delay: "0.9s",
    width: "12px",
  },
];

export default function DevelopedBy() {
  return (
    <div className={styles.kgDevelopedBar}>
      <a
        href="https://kgaurav6791.github.io/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Kgaurav website"
        className={styles.kgDevelopedLink}
      >
        <span className={styles.kgDevelopedText}>Developed By</span>

        <span className={styles.kgCosmicName}>
          {letters.map((letter) => (
            <span
              key={letter.char + letter.delay}
              className={styles.kgCosmicLetter}
              style={{
                "--color": letter.color,
                "--delay": letter.delay,
                "--w": letter.width,
                paddingRight: letter.paddingRight || undefined,
              }}
              data-text={letter.char}
            >
              <span>{letter.char}</span>
            </span>
          ))}
        </span>
      </a>
    </div>
  );
}