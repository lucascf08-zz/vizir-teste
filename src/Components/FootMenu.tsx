import { StyledFootMenu } from "./FootMenu.styles";
interface footMenuProps {
  menus: string[];
  title: string;
}
const FootMenu = ({ ...props }: footMenuProps) => {
  return (
    <StyledFootMenu>
      <ul>
        <li id="list-head">
          <strong>{props.title}</strong>
        </li>
        {props.menus.map((menu) => (
          <li key={menu}>{menu}</li>
        ))}
      </ul>
    </StyledFootMenu>
  );
};
export default FootMenu;
