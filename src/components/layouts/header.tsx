/**
 * Header component in Layout
 * @author Denys Ostroverkh
 * @published Nov 16, 2024
 * @modified Nov 16, 2024
 */

interface Props {
  uri: string;
} //Props type

const Header: React.FC<Props> = ({ uri }) => {
  return (
    <div>
      <div className="flex pink white font-bold justify-center pt-1em">
        JSON Reader
      </div>
      <div className="flex w-full white gap-[1em] font-bold items-center justify-center text-[1.5em] pt-[0.5em] pb-[0.3em]">
        <h1 className={uri === "upload" ? "green" : ""}>Upload</h1>
        <h2 className={uri === "render" ? "green" : ""}>Render</h2>
      </div>
    </div>
  );
};

export default Header;
