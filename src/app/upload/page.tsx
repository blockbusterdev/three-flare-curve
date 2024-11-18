import Header from "@/components/layouts/header";
import Upload from "@/components/pages/upload";
import Footer from "@/components/layouts/footer";

export default function Page() {
  return (
    <>
      <Header uri="upload" />
      <Upload />
      <Footer />
    </>
  );
}
