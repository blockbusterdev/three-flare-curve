import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";
import Renderer from "@/components/components/file-render";

export default function Page() {
  //const file = useSelector((state: RootState) => state.file.data);
  return (
    <>
      <Header uri="render" />
      <main>
        <Renderer />
      </main>
      <Footer />
    </>
  );
}
