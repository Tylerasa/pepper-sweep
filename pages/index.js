import CustomInput from "../components/CustomInput";
import styles from "../styles/Home.module.css";

export default function Home({ countries }) {
  return (
    <div className={styles.container}>
      <CustomInput countries={countries} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();

  return {
    props: { countries: data }
  };
};
