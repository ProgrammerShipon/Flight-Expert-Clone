import ButtonPrimary from "../../Components/Buttons/ButtonPrimary";
import useProductsContext from "../../hooks/useProductsContext";
import useUser from "../../hooks/useUser";
import NavUser from "./NavUser";

export default function HeaderRightSide() {
  const { addToCart } = useProductsContext();
  const { user } = useUser();

  // console.log("addToCart ", addToCart);

  return (
    <>
      <div className="flex items-center gap-4">
        {user?.email ? (
          <li>
            <NavUser />
          </li>
        ) : (
          <ButtonPrimary>Login</ButtonPrimary>
        )}
      </div>
    </>
  );
}
