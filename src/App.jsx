import InputShortener from "./components/InputShortener"
import { Toaster } from "sonner";

const App = () => {
  return (
    <div>
      <Toaster position="top-right" richColors />
      <InputShortener />
    </div>
  )
}

export default App
