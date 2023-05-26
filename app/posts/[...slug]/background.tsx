import styles from "./background.module.css";

export default function Background() {
  return (
    <div className={styles.main}>
      <div className={styles.content} />
    </div>
  );
}

{/* <div className="w-screen h-screen z-20 absolute top-0 bg-[radial-gradient(circle, rgba(2, 0, 36, 0) 0, #fafafa 100%)]">
<div className="w-screen h-screen flex justify-center fixed pt-[120px] pr-[30px] pb-[50px] pl-[80px]"> */}