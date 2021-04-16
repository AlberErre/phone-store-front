import { FC, CSSProperties } from "react";
import { useMediaQuery } from "react-responsive";
import { Phone } from "../domain/Phone";

interface PhoneDescriptionHeaderProps {
  phone: Phone;
}

export const PhoneDescriptionHeader: FC<PhoneDescriptionHeaderProps> = ({
  phone,
}) => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  return (
    <div
      style={{
        ...customStyles.cardHeader,
        flexDirection: isMobile ? "column" : "row",
      }}
    >
      <div style={customStyles.nameContainer}>
        <h2>{phone.brand}</h2>
        <p>{phone.name}</p>
      </div>
      <div
        style={{
          ...customStyles.priceContainer,
          alignItems: isMobile ? "flex-start" : "flex-end",
        }}
      >
        <h2>{phone.price} €</h2>
        <div style={customStyles.price}>
          <p style={{ marginTop: 0 }}>{phone.colorDescription} </p>
          <div
            style={{
              ...customStyles.colorBox,
              backgroundColor: phone.color,
            }}
          />
        </div>
      </div>
    </div>
  );
};

const customStyles: Record<string, CSSProperties> = {
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  nameContainer: {
    flexShrink: 1,
    marginRight: "1rem",
  },
  priceContainer: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
  },
  price: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  colorBox: {
    width: "1rem",
    height: "1rem",
    borderRadius: "0.25rem",
    marginLeft: "0.5rem",
  },
};
