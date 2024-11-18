/**
 * Upload page-component
 * @author Denys Ostroverkh
 * @published Nov 16, 2024
 * @modified Nov 16, 2024
 * @returns component of hpage-contencts for upload page
 */

import FileUploader from "@/components/components/file-input";

export default function Page() {
  return (
    <main className="page-upload">
      <FileUploader />
    </main>
  );
}
