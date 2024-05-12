import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { IoMdCloudUpload } from "react-icons/io";
import { IoClose } from "react-icons/io5";

function DragInDrop() {
  const [file, setFile] = useState<any>([]);

  function handdleClickRemoveFile() {
    setFile([]);
    acceptedFiles.pop();
  }

  const { getRootProps, getInputProps, acceptedFiles, fileRejections } =
    useDropzone({
      maxFiles: 1,
      accept: {
        "video/*": [],
      },
      onDrop(acceptedFiles) {
        const file = acceptedFiles[0];
        setFile(
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        );
      },
    });

  if (fileRejections.length > 0) {
    alert("o arquivo deve ser um video" + fileRejections.length);
    fileRejections.pop();
  }
  return (
    <div>
      <p className="text-black mb-2 font-bold">Video de apresentação</p>
      <div
        {...getRootProps()}
        className="relative border border-black border-dashed rounded flex items-center  flex-col gap-1 p-6 cursor-pointer "
      >
        <div className="absolute top-0 left-0 bg-black opacity-0 hover:opacity-20 w-full h-full z-0"></div>
        
        <input {...getInputProps()} />
        <span className="text-9xl">
          <IoMdCloudUpload />
        </span>
        <p>Arraste e solte ou <span className="text-blue-500">escolha um video</span> para fazer upload</p>

        {acceptedFiles.map((file) => {
          return <p key={file.name}>{file.name}</p>;
        })}
      </div>
      {file.preview && (
        <div className="relative max-w-[200px]">
          <video className="w-full mt-3" src={file.preview}></video>
          <span
            className="absolute top-2 right-2 cursor-pointer hover:opacity-80"
            onClick={handdleClickRemoveFile}
          >
            <IoClose />
          </span>
        </div>
      )}
    </div>
  );
}

export default DragInDrop;
