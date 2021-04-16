import { useRouter } from "next/router";
import { CSSProperties, FC } from "react";
import { useMediaQuery } from "react-responsive";
import { Phone } from "../domain/Phone";
import { PhoneDescriptionHeader } from "./PhoneDescriptionHeader";
import styles from "../styles/Main.module.css";

interface PhoneListContainerProps {
  phones: Phone[];
}

export const PhoneListContainer: FC<PhoneListContainerProps> = ({ phones }) => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  const router = useRouter();
  const onPress = (name: string) => router.push(`/detail/${name}`);

  return (
    <div style={{ display: "flex" }}>
      {phones.map((phone) => (
        <div
          className={styles.card}
          style={customStyles.card}
          onClick={() => onPress(phone.name)}
        >
          <PhoneDescriptionHeader phone={phone} />
          <img
            src={phone.image.url}
            alt={phone.name}
            style={{
              ...customStyles.image,
              width: isMobile ? "14rem" : "24rem",
            }}
          />
        </div>
      ))}
    </div>
  );
};

const customStyles: Record<string, CSSProperties> = {
  card: {
    cursor: "pointer",
  },
  image: {
    marginTop: "2rem",
  },
};
