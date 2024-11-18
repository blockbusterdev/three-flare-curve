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
    <header>
      <div className="flex yellow white font-bold justify-center pt-1em">
        JSON Reader
      </div>
      <div className="flex w-full white gap-[1em] font-bold items-center justify-center text-[1.5em] pt-[0.5em] pb-[0.3em]">
        <a
          className={uri === "upload" ? "green" : "cursor-pointer"}
          href="/upload"
        >
          Upload
        </a>
        <a
          className={uri === "render" ? "green" : "cursor-pointer"}
          href="/render"
        >
          Render
        </a>
      </div>
    </header>
  );
};

export default Header;
