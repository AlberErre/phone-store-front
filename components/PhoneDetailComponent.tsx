import { FC, CSSProperties } from "react";
import { useMediaQuery } from "react-responsive";
import { Phone } from "../domain/Phone";
import styles from "../styles/Main.module.css";

interface PhoneDetailComponentProps {
  phone: Phone;
}

export const PhoneDetailComponent: FC<PhoneDetailComponentProps> = ({
  phone,
}) => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  return (
    <div>
      <h1
        className={styles.title}
        style={{ textAlign: "left" }}
      >{`${phone.name}`}</h1>

      <div>
        <h2>{phone.brand}</h2>
        <h2>{phone.price} €</h2>
      </div>

      <p style={customStyles.description}>{phone.description}</p>

      <img
        src={phone.image.url}
        alt={phone.name}
        style={{
          ...customStyles.image,
          width: isMobile ? "14rem" : "24rem",
        }}
      />
    </div>
  );
};

const customStyles: Record<string, CSSProperties> = {
  image: {
    marginTop: "2rem",
  },
  description: {
    textAlign: "justify",
    paddingRight: "1rem",
  },
};
