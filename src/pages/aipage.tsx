import '../app/globals.css';
import Aibar from "@/components/Aibar";
import InputBox from "@/components/InputBox";

export default function Comhome() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Aibar />
      <div className="flex-grow flex items-center justify-center">
        <InputBox />
      </div>
    </div>
  );
}
